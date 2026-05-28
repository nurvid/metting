'use client';

import { useEffect, useRef, useState } from 'react';
import { getSupabaseClient, type RealtimeChannel } from '../lib/supabase';

type Tab = 'share' | 'view';
type Role = 'host' | 'viewer';

type SignalMessage =
  | { type: 'join-request'; from: string }
  | { type: 'offer'; from: string; sdp: RTCSessionDescriptionInit }
  | { type: 'answer'; from: string; sdp: RTCSessionDescriptionInit }
  | { type: 'ice-candidate'; from: string; candidate: RTCIceCandidateInit };

const SIGNAL_EVENTS = {
  'join-request': 'join-request',
  'offer': 'offer',
  'answer': 'answer',
  'ice-candidate': 'ice-candidate',
} as const satisfies Record<SignalMessage['type'], string>;

type PresenceState = Record<string, Array<Record<string, unknown>>>;

const ICE_SERVERS: RTCIceServer[] = [
  { urls: 'stun:stun.l.google.com:19302' },
];

function makeRoomId() {
  return `room-${crypto.randomUUID().slice(0, 8)}`;
}

function makeClientId() {
  return crypto.randomUUID();
}

function buildInviteUrl(roomId: string) {
  const inviteUrl = new URL(window.location.origin + window.location.pathname);
  inviteUrl.searchParams.set('room', roomId);
  return inviteUrl.toString();
}

function ScreenShare() {
  const [tab, setTab] = useState<Tab>('share');
  const [roomId, setRoomId] = useState('');
  const [shareLink, setShareLink] = useState('');
  const [isSharing, setIsSharing] = useState(false);
  const [isViewing, setIsViewing] = useState(false);
  const [viewerConnected, setViewerConnected] = useState(false);
  const [copyStatus, setCopyStatus] = useState('');
  const [shareError, setShareError] = useState('');
  const [viewError, setViewError] = useState('');
  const [supabaseError, setSupabaseError] = useState('');
  const [joinRoomId, setJoinRoomId] = useState('');
  const [showLocalPreview, setShowLocalPreview] = useState(true);
  const [isLikelySelfCapture, setIsLikelySelfCapture] = useState(false);

  const localVideoRef = useRef<HTMLVideoElement | null>(null);
  const remoteVideoViewRef = useRef<HTMLVideoElement | null>(null);

  const localStreamRef = useRef<MediaStream | null>(null);
  const channelRef = useRef<RealtimeChannel | null>(null);
  const pcRef = useRef<RTCPeerConnection | null>(null);
  const pendingCandidatesRef = useRef<RTCIceCandidateInit[]>([]);
  const clientIdRef = useRef<string>(makeClientId());
  const roleRef = useRef<Role | null>(null);
  const mountedRef = useRef(true);
  const teardownInProgressRef = useRef(false);
  const supabaseAvailableRef = useRef(false);
  const trackEndedListenersRef = useRef<MediaStreamTrack[]>([]);

  useEffect(() => {
    try {
      getSupabaseClient();
      supabaseAvailableRef.current = true;
    } catch {
      supabaseAvailableRef.current = false;
    }

    const params = new URLSearchParams(window.location.search);
    const room = params.get('room');
    if (room) {
      setJoinRoomId(room);
      setTab('view');
    }
  }, []);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
      void teardownSession();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function updateConnectionStatus() {
    const state = pcRef.current?.iceConnectionState ?? 'new';
    if (roleRef.current === 'host') {
      setViewerConnected(state === 'connected' || state === 'completed');
    }
    if (roleRef.current === 'viewer') {
      setIsViewing(state === 'connected' || state === 'completed');
    }
  }

  function getViewerCount(channel: RealtimeChannel) {
    const presence = channel.presenceState() as PresenceState;
    return Object.values(presence)
      .flat()
      .filter((entry) => entry.role === 'viewer').length;
  }

  function refreshPresenceStatus(channel: RealtimeChannel) {
    if (roleRef.current === 'host') {
      const viewerCount = getViewerCount(channel);
      setViewerConnected(viewerCount > 0);
      return viewerCount;
    }
    return 0;
  }

  async function sendSignal(
    channel: RealtimeChannel,
    event: SignalMessage['type'],
    payload: Record<string, unknown>
  ) {
    await channel.send({
      type: 'broadcast',
      event: SIGNAL_EVENTS[event],
      payload,
    });
  }

  async function flushPendingCandidates(pc: RTCPeerConnection) {
    const pending = pendingCandidatesRef.current.splice(0);
    for (const candidate of pending) {
      await pc.addIceCandidate(new RTCIceCandidate(candidate));
    }
  }

  function setupPeerConnection(role: Role) {
    const pc = new RTCPeerConnection({ iceServers: ICE_SERVERS });
    roleRef.current = role;
    pcRef.current = pc;

    pc.onicecandidate = (event) => {
      const channel = channelRef.current;
      if (!channel || !event.candidate) return;
      void sendSignal(channel, 'ice-candidate', {
        from: clientIdRef.current,
        candidate: event.candidate.toJSON(),
      });
    };

    pc.oniceconnectionstatechange = () => {
      updateConnectionStatus();
      const state = pc.iceConnectionState;
      if (state === 'failed' || state === 'disconnected' || state === 'closed') {
        if (role === 'host') {
          setViewerConnected(false);
          if (pcRef.current) {
            try {
              pcRef.current.close();
            } catch {}
            pcRef.current = null;
          }
        } else {
          setIsViewing(false);
        }
      }
    };

    if (role === 'viewer') {
      const remoteStream = new MediaStream();
      pc.ontrack = (event) => {
        event.streams[0]?.getTracks().forEach((track) => remoteStream.addTrack(track));
        if (remoteVideoViewRef.current) {
          remoteVideoViewRef.current.srcObject = remoteStream;
        }
      };
    }

    return pc;
  }

  async function initiateHostOffer() {
    const localStream = localStreamRef.current;
    const channel = channelRef.current;
    if (!localStream || !channel || pcRef.current || roleRef.current !== 'host') return;

    const pc = setupPeerConnection('host');
    localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));

    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    await sendSignal(channel, 'offer', {
      from: clientIdRef.current,
      sdp: pc.localDescription ?? offer,
    });
  }

  async function handleOffer(sdp: RTCSessionDescriptionInit) {
    if (roleRef.current !== 'viewer') return;

    const channel = channelRef.current;
    if (!channel) return;

    const pc = pcRef.current ?? setupPeerConnection('viewer');
    await pc.setRemoteDescription(new RTCSessionDescription(sdp));
    await flushPendingCandidates(pc);

    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    await sendSignal(channel, 'answer', {
      from: clientIdRef.current,
      sdp: pc.localDescription ?? answer,
    });
  }

  async function handleAnswer(sdp: RTCSessionDescriptionInit) {
    const pc = pcRef.current;
    if (!pc || roleRef.current !== 'host') return;
    await pc.setRemoteDescription(new RTCSessionDescription(sdp));
    await flushPendingCandidates(pc);
    setViewerConnected(true);
  }

  async function handleCandidate(candidate: RTCIceCandidateInit) {
    const pc = pcRef.current;
    if (!pc) {
      pendingCandidatesRef.current.push(candidate);
      return;
    }

    if (!pc.remoteDescription) {
      pendingCandidatesRef.current.push(candidate);
      return;
    }

    await pc.addIceCandidate(new RTCIceCandidate(candidate));
  }

  async function openRoomChannel(room: string, role: Role) {
    const supabase = getSupabaseClient();
    const channel = supabase.channel(room, {
      config: {
        broadcast: { self: false },
        presence: { key: clientIdRef.current },
      },
    });
    channelRef.current = channel;

    channel.on('broadcast', { event: SIGNAL_EVENTS['join-request'] }, ({ payload }) => {
      const data = payload as { from?: string };
      if (role === 'host' && data.from && data.from !== clientIdRef.current) {
        void initiateHostOffer();
      }
    });

    channel.on('broadcast', { event: SIGNAL_EVENTS['offer'] }, ({ payload }) => {
      const data = payload as { from?: string; sdp?: RTCSessionDescriptionInit };
      if (role === 'viewer' && data.sdp) {
        void handleOffer(data.sdp);
      }
    });

    channel.on('broadcast', { event: SIGNAL_EVENTS['answer'] }, ({ payload }) => {
      const data = payload as { from?: string; sdp?: RTCSessionDescriptionInit };
      if (role === 'host' && data.sdp) {
        void handleAnswer(data.sdp);
      }
    });

    channel.on('broadcast', { event: SIGNAL_EVENTS['ice-candidate'] }, ({ payload }) => {
      const data = payload as { from?: string; candidate?: RTCIceCandidateInit };
      if (data.candidate) {
        void handleCandidate(data.candidate);
      }
    });

    channel.on('presence', { event: 'sync' }, () => {
      const viewerCount = refreshPresenceStatus(channel);
      if (role === 'host' && localStreamRef.current && !pcRef.current && viewerCount > 0) {
        void initiateHostOffer();
      }
    });

    channel.on('presence', { event: 'join' }, () => {
      const viewerCount = refreshPresenceStatus(channel);
      if (role === 'host' && localStreamRef.current && !pcRef.current && viewerCount > 0) {
        void initiateHostOffer();
      }
    });

    channel.on('presence', { event: 'leave' }, () => {
      const viewerCount = refreshPresenceStatus(channel);
      if (role === 'host' && viewerCount === 0) {
        setViewerConnected(false);
        if (pcRef.current) {
          try {
            pcRef.current.close();
          } catch {}
          pcRef.current = null;
        }
      }
      if (role === 'viewer' && viewerCount === 0) {
        setIsViewing(false);
      }
    });

    channel.subscribe(async (status) => {
      if (!mountedRef.current) return;

      if (status === 'SUBSCRIBED') {
        await channel.track({
          clientId: clientIdRef.current,
          role,
          joinedAt: new Date().toISOString(),
        });

        if (role === 'viewer') {
          await sendSignal(channel, 'join-request', { from: clientIdRef.current });
        }
      }

      if (status === 'CHANNEL_ERROR' || status === 'TIMED_OUT') {
        const message = role === 'host' ? 'Failed to open room channel' : 'Failed to join room channel';
        if (role === 'host') {
          setShareError(message);
          setIsSharing(false);
        } else {
          setViewError(message);
          setIsViewing(false);
        }
      }
    });
    return channel;
  }

  async function teardownSession() {
    if (teardownInProgressRef.current) return;
    teardownInProgressRef.current = true;
    try {
      const channel = channelRef.current;
      channelRef.current = null;

      const pc = pcRef.current;
      pcRef.current = null;
      pendingCandidatesRef.current = [];

      if (pc) {
        try {
          pc.close();
        } catch {}
      }

      if (channel) {
        try {
          await getSupabaseClient().removeChannel(channel);
        } catch {}
      }

      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((track) => track.stop());
        localStreamRef.current = null;
      }

      trackEndedListenersRef.current = [];

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = null;
      }

      if (remoteVideoViewRef.current) {
        remoteVideoViewRef.current.srcObject = null;
      }
    } finally {
      teardownInProgressRef.current = false;
    }
  }

  function createMeetingLink() {
    setShareError('');
    setCopyStatus('');
    const nextRoomId = makeRoomId();
    const nextShareLink = buildInviteUrl(nextRoomId);
    setRoomId(nextRoomId);
    setShareLink(nextShareLink);
    window.history.replaceState(null, '', nextShareLink);
  }

  async function startSharing() {
    setShareError('');
    setCopyStatus('');
    setViewerConnected(false);
    setSupabaseError('');
    setIsLikelySelfCapture(false);

    if (!supabaseAvailableRef.current) {
      setShareError('Supabase is not configured');
      return;
    }

    const nextRoomId = roomId || makeRoomId();
    const nextShareLink = buildInviteUrl(nextRoomId);
    setRoomId(nextRoomId);
    setShareLink(nextShareLink);
    window.history.replaceState(null, '', nextShareLink);

    try {
      await teardownSession();
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true,
      });

      localStreamRef.current = stream;
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      const displaySurface = stream.getVideoTracks()[0]?.getSettings()?.displaySurface;
      const likelySelfCapture = displaySurface === 'browser';
      setIsLikelySelfCapture(likelySelfCapture);
      setShowLocalPreview(!likelySelfCapture);

      const tracks = stream.getVideoTracks();
      trackEndedListenersRef.current = [...tracks];
      tracks.forEach((track) => {
        track.addEventListener('ended', () => {
          if (!teardownInProgressRef.current) {
            void stopSharing();
          }
        });
      });
      roleRef.current = 'host';
      await openRoomChannel(nextRoomId, 'host');
      setIsSharing(true);
    } catch (err) {
      setShareError(err instanceof Error ? err.message : 'Failed to start screen sharing');
    }
  }

  async function stopSharing() {
    await teardownSession();
    roleRef.current = null;
    setIsSharing(false);
    setViewerConnected(false);
    setIsLikelySelfCapture(false);
    setShowLocalPreview(true);
  }

  async function copyShareLink() {
    if (!shareLink) return;
    try {
      await navigator.clipboard.writeText(shareLink);
      setCopyStatus('Copied!');
      setTimeout(() => setCopyStatus(''), 1500);
    } catch {
      setCopyStatus('Copy failed');
      setTimeout(() => setCopyStatus(''), 1500);
    }
  }

  async function joinRoom() {
    setViewError('');
    setSupabaseError('');

    const targetRoom = joinRoomId.trim();
    if (!targetRoom) {
      setViewError('Enter a room ID');
      return;
    }

    if (!supabaseAvailableRef.current) {
      setViewError('Supabase is not configured');
      return;
    }

    await teardownSession();
    roleRef.current = 'viewer';
    setIsViewing(true);

    try {
      await openRoomChannel(targetRoom, 'viewer');
    } catch (err) {
      setViewError(err instanceof Error ? err.message : 'Failed to join room');
    }
  }

  async function leaveRoom() {
    await teardownSession();
    roleRef.current = null;
    setIsViewing(false);
  }

  function goFullscreen() {
    const el = remoteVideoViewRef.current;
    if (!el) return;
    if (el.requestFullscreen) {
      el.requestFullscreen().catch(() => {});
    }
  }

  return (
    <div className="app-shell">
      <div className="app-frame">
        <section className="panel" style={{ padding: 20 }}>
          <div className="room-row" style={{ justifyContent: 'space-between' }}>
            <div>
              <p className="status-label" style={{ margin: 0 }}>ShareScreen</p>
              <h1 className="title" style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', marginTop: 6 }}>
                {tab === 'share' ? 'Share' : 'View'} a screen
              </h1>
            </div>

            <div className={`meta-pill ${viewerConnected ? 'status-ok' : 'status-wait'}`}>
              {isSharing ? 'Broadcasting' : isViewing ? 'Viewing' : 'Ready'}
            </div>
          </div>

          <div className="tabbar" aria-label="Share or view" style={{ marginTop: 18 }}>
            <button
              className={`tab ${tab === 'share' ? 'is-active' : ''}`}
              onClick={() => setTab('share')}
            >
              Share
            </button>
            <button
              className={`tab ${tab === 'view' ? 'is-active' : ''}`}
              onClick={() => setTab('view')}
            >
              View
            </button>
          </div>

          {(shareError || viewError || supabaseError) && (
            <div className="notice" style={{ marginTop: 16 }}>
              {shareError || viewError || supabaseError}
            </div>
          )}

          <div style={{ height: 18 }} />

          {tab === 'share' ? (
            <div className="grid" style={{ gap: 16 }}>
              <div className="room-row" style={{ justifyContent: 'space-between' }}>
                <div className="copy-hint">
                  {viewerConnected
                    ? 'Viewer connected'
                    : isSharing
                      ? 'Waiting for viewer'
                      : 'Create a link to begin'}
                </div>
                {roomId && (
                  <div className="copy-hint">
                    {copyStatus || 'Room link ready'}
                  </div>
                )}
              </div>

              <div className="toolbar" style={{ marginTop: 0, marginBottom: 0 }}>
                {!isSharing ? (
                  <>
                    <button className="button button-ink" onClick={createMeetingLink}>
                      Create link
                    </button>
                    <button className="button button-primary" onClick={startSharing}>
                      {roomId ? 'Start sharing' : 'Create and start'}
                    </button>
                  </>
                ) : (
                  <button className="button button-danger" onClick={stopSharing}>
                    Stop sharing
                  </button>
                )}
              </div>

              {roomId && (
                <div style={{ marginTop: 2 }}>
                  <div className="room-code">
                    <span>{shareLink || buildInviteUrl(roomId)}</span>
                  </div>
                  <div className="toolbar" style={{ marginTop: 12, marginBottom: 0 }}>
                    <button className="button button-ghost" onClick={copyShareLink}>
                      Copy link
                    </button>
                  </div>
                </div>
              )}

              <div className="video-shell">
                {isSharing && !showLocalPreview ? (
                  <div className="empty-state">
                    <div style={{ display: 'grid', gap: 10, justifyItems: 'center', padding: 18 }}>
                      <div>
                        {isLikelySelfCapture
                          ? 'Preview hidden to avoid the “infinite mirror” effect.'
                          : 'Preview hidden.'}
                      </div>
                      <button className="button button-ghost" onClick={() => setShowLocalPreview(true)}>
                        Show preview anyway
                      </button>
                    </div>
                  </div>
                ) : (
                  <video ref={localVideoRef} className="video" autoPlay playsInline muted />
                )}
              </div>
            </div>
          ) : (
            <div className="grid" style={{ gap: 16 }}>
              <div className="video-shell">
                {isViewing ? (
                  <video
                    ref={remoteVideoViewRef}
                    className="video"
                    autoPlay
                    playsInline
                    controls
                  />
                ) : (
                  <div className="empty-state">
                    No stream yet. Paste the room ID and join.
                  </div>
                )}
              </div>

              <div className="room-card">
                <div className="toolbar">
                  <input
                    className="field"
                    type="text"
                    placeholder="Paste room ID"
                    value={joinRoomId}
                    onChange={(e) => setJoinRoomId(e.target.value)}
                    disabled={isViewing}
                  />
                  {!isViewing ? (
                    <button className="button button-primary" onClick={joinRoom}>
                      Join
                    </button>
                  ) : (
                    <button className="button button-danger" onClick={leaveRoom}>
                      Leave
                    </button>
                  )}
                  <button className="button button-ghost" onClick={goFullscreen} disabled={!isViewing}>
                    Fullscreen
                  </button>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default ScreenShare;
