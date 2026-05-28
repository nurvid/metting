module.exports = [
"[project]/src/components/ScreenShare.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../lib/supabase'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
'use client';
;
;
;
const ICE_SERVERS = [
    {
        urls: 'stun:stun.l.google.com:19302'
    }
];
function makeRoomId() {
    return `room-${crypto.randomUUID().slice(0, 8)}`;
}
function makeClientId() {
    return crypto.randomUUID();
}
function buildInviteUrl(roomId) {
    const inviteUrl = new URL(window.location.origin + window.location.pathname);
    inviteUrl.searchParams.set('room', roomId);
    return inviteUrl.toString();
}
function ScreenShare() {
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('share');
    const [roomId, setRoomId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [shareLink, setShareLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSharing, setIsSharing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isViewing, setIsViewing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewerConnected, setViewerConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copyStatus, setCopyStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [shareError, setShareError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [viewError, setViewError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [supabaseError, setSupabaseError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [joinRoomId, setJoinRoomId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const localVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const remoteVideoViewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const localStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const channelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pcRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingCandidatesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const clientIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(makeClientId());
    const roleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const params = new URLSearchParams(window.location.search);
        const room = params.get('room');
        if (room) {
            setJoinRoomId(room);
            setTab('view');
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
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
            setIsViewing(state === 'connected' || state === 'completed' || isViewing);
        }
    }
    function getViewerCount(channel) {
        const presence = channel.presenceState();
        return Object.values(presence).flat().filter((entry)=>entry.role === 'viewer').length;
    }
    function refreshPresenceStatus(channel) {
        if (roleRef.current === 'host') {
            setViewerConnected(getViewerCount(channel) > 0);
        }
    }
    async function sendSignal(channel, event, payload) {
        await channel.send({
            type: 'broadcast',
            event,
            payload
        });
    }
    async function flushPendingCandidates(pc) {
        const pending = pendingCandidatesRef.current.splice(0);
        for (const candidate of pending){
            await pc.addIceCandidate(new RTCIceCandidate(candidate));
        }
    }
    function setupPeerConnection(role) {
        const pc = new RTCPeerConnection({
            iceServers: ICE_SERVERS
        });
        roleRef.current = role;
        pcRef.current = pc;
        pc.onicecandidate = (event)=>{
            const channel = channelRef.current;
            if (!channel || !event.candidate) return;
            void sendSignal(channel, 'ice-candidate', {
                from: clientIdRef.current,
                candidate: event.candidate.toJSON()
            });
        };
        pc.oniceconnectionstatechange = ()=>{
            updateConnectionStatus();
            const state = pc.iceConnectionState;
            if (state === 'failed' || state === 'disconnected' || state === 'closed') {
                if (role === 'host') {
                    setViewerConnected(false);
                    if (pcRef.current) {
                        try {
                            pcRef.current.close();
                        } catch  {}
                        pcRef.current = null;
                    }
                } else {
                    setIsViewing(false);
                }
            }
        };
        if (role === 'viewer') {
            const remoteStream = new MediaStream();
            pc.ontrack = (event)=>{
                event.streams[0]?.getTracks().forEach((track)=>remoteStream.addTrack(track));
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
        localStream.getTracks().forEach((track)=>pc.addTrack(track, localStream));
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        await sendSignal(channel, 'offer', {
            from: clientIdRef.current,
            sdp: pc.localDescription ?? offer
        });
    }
    async function handleOffer(sdp) {
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
            sdp: pc.localDescription ?? answer
        });
    }
    async function handleAnswer(sdp) {
        const pc = pcRef.current;
        if (!pc || roleRef.current !== 'host') return;
        await pc.setRemoteDescription(new RTCSessionDescription(sdp));
        await flushPendingCandidates(pc);
        setViewerConnected(true);
    }
    async function handleCandidate(candidate) {
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
    async function openRoomChannel(room, role) {
        const supabase = getSupabaseClient();
        const channel = supabase.channel(room, {
            config: {
                broadcast: {
                    self: false
                },
                presence: {
                    key: clientIdRef.current
                }
            }
        });
        channelRef.current = channel;
        channel.on('broadcast', {
            event: 'join-request'
        }, ({ payload })=>{
            const data = payload;
            if (role === 'host' && data.from && data.from !== clientIdRef.current) {
                void initiateHostOffer();
            }
        });
        channel.on('broadcast', {
            event: 'offer'
        }, ({ payload })=>{
            const data = payload;
            if (role === 'viewer' && data.sdp) {
                void handleOffer(data.sdp);
            }
        });
        channel.on('broadcast', {
            event: 'answer'
        }, ({ payload })=>{
            const data = payload;
            if (role === 'host' && data.sdp) {
                void handleAnswer(data.sdp);
            }
        });
        channel.on('broadcast', {
            event: 'ice-candidate'
        }, ({ payload })=>{
            const data = payload;
            if (data.candidate) {
                void handleCandidate(data.candidate);
            }
        });
        channel.on('presence', {
            event: 'sync'
        }, ()=>{
            refreshPresenceStatus(channel);
            if (role === 'host' && localStreamRef.current && !pcRef.current && getViewerCount(channel) > 0) {
                void initiateHostOffer();
            }
        });
        channel.on('presence', {
            event: 'join'
        }, ()=>{
            refreshPresenceStatus(channel);
            if (role === 'host' && localStreamRef.current && !pcRef.current && getViewerCount(channel) > 0) {
                void initiateHostOffer();
            }
        });
        channel.on('presence', {
            event: 'leave'
        }, ()=>{
            refreshPresenceStatus(channel);
            if (role === 'host' && getViewerCount(channel) === 0) {
                setViewerConnected(false);
                if (pcRef.current) {
                    try {
                        pcRef.current.close();
                    } catch  {}
                    pcRef.current = null;
                }
            }
            if (role === 'viewer' && getViewerCount(channel) === 0) {
                setIsViewing(false);
            }
        });
        channel.subscribe(async (status)=>{
            if (!mountedRef.current) return;
            if (status === 'SUBSCRIBED') {
                await channel.track({
                    clientId: clientIdRef.current,
                    role,
                    joinedAt: new Date().toISOString()
                });
                if (role === 'viewer') {
                    await sendSignal(channel, 'join-request', {
                        from: clientIdRef.current
                    });
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
        const channel = channelRef.current;
        channelRef.current = null;
        const pc = pcRef.current;
        pcRef.current = null;
        pendingCandidatesRef.current = [];
        if (pc) {
            try {
                pc.close();
            } catch  {}
        }
        if (channel) {
            try {
                await getSupabaseClient().removeChannel(channel);
            } catch  {}
        }
        if (localStreamRef.current) {
            localStreamRef.current.getTracks().forEach((track)=>track.stop());
            localStreamRef.current = null;
        }
        if (localVideoRef.current) {
            localVideoRef.current.srcObject = null;
        }
        if (remoteVideoViewRef.current) {
            remoteVideoViewRef.current.srcObject = null;
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
        try {
            getSupabaseClient();
        } catch (err) {
            setShareError(err instanceof Error ? err.message : 'Supabase is not configured');
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
                audio: true
            });
            localStreamRef.current = stream;
            if (localVideoRef.current) {
                localVideoRef.current.srcObject = stream;
            }
            stream.getVideoTracks().forEach((track)=>{
                track.addEventListener('ended', ()=>{
                    void stopSharing();
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
    }
    async function copyShareLink() {
        if (!shareLink) return;
        try {
            await navigator.clipboard.writeText(shareLink);
            setCopyStatus('Copied!');
            setTimeout(()=>setCopyStatus(''), 1500);
        } catch  {
            setCopyStatus('Copy failed');
            setTimeout(()=>setCopyStatus(''), 1500);
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
        try {
            getSupabaseClient();
        } catch (err) {
            setViewError(err instanceof Error ? err.message : 'Supabase is not configured');
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
            el.requestFullscreen().catch(()=>{});
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontFamily: 'system-ui, sans-serif',
            maxWidth: 920,
            margin: '0 auto',
            padding: 24
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    marginBottom: 8
                },
                children: "ShareScreen"
            }, void 0, false, {
                fileName: "[project]/src/components/ScreenShare.tsx",
                lineNumber: 476,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    marginBottom: 20,
                    color: '#6b7280'
                },
                children: "Supabase Realtime signaling with direct WebRTC screen sharing."
            }, void 0, false, {
                fileName: "[project]/src/components/ScreenShare.tsx",
                lineNumber: 477,
                columnNumber: 7
            }, this),
            (shareError || viewError || supabaseError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: 'crimson',
                    marginBottom: 16
                },
                children: shareError || viewError || supabaseError
            }, void 0, false, {
                fileName: "[project]/src/components/ScreenShare.tsx",
                lineNumber: 482,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    gap: 8,
                    margin: '16px 0',
                    borderBottom: '1px solid #ddd'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setTab('share'),
                        style: {
                            padding: '8px 16px',
                            border: 'none',
                            background: 'transparent',
                            borderBottom: tab === 'share' ? '2px solid #2563eb' : '2px solid transparent',
                            fontWeight: tab === 'share' ? 600 : 400,
                            cursor: 'pointer'
                        },
                        children: "Share Screen"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScreenShare.tsx",
                        lineNumber: 495,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setTab('view'),
                        style: {
                            padding: '8px 16px',
                            border: 'none',
                            background: 'transparent',
                            borderBottom: tab === 'view' ? '2px solid #2563eb' : '2px solid transparent',
                            fontWeight: tab === 'view' ? 600 : 400,
                            cursor: 'pointer'
                        },
                        children: "View Screen"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScreenShare.tsx",
                        lineNumber: 508,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ScreenShare.tsx",
                lineNumber: 487,
                columnNumber: 7
            }, this),
            tab === 'share' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 8,
                            alignItems: 'center',
                            marginBottom: 12,
                            flexWrap: 'wrap'
                        },
                        children: [
                            !isSharing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: createMeetingLink,
                                style: {
                                    padding: '8px 14px',
                                    background: '#111827',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: 6,
                                    cursor: 'pointer'
                                },
                                children: "Create Meeting Link"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 535,
                                columnNumber: 15
                            }, this),
                            !isSharing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: startSharing,
                                style: {
                                    padding: '8px 14px',
                                    background: '#2563eb',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: 6,
                                    cursor: 'pointer'
                                },
                                children: roomId ? 'Start Sharing' : 'Create and Start'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 551,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: stopSharing,
                                style: {
                                    padding: '8px 14px',
                                    background: '#dc2626',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: 6,
                                    cursor: 'pointer'
                                },
                                children: "Stop Sharing"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 565,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScreenShare.tsx",
                        lineNumber: 525,
                        columnNumber: 11
                    }, this),
                    shareLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 8,
                            alignItems: 'center',
                            marginBottom: 12,
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Invite link:"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 591,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                style: {
                                    background: '#f3f4f6',
                                    padding: '4px 8px',
                                    borderRadius: 4,
                                    maxWidth: '100%',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis'
                                },
                                children: shareLink
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 592,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: copyShareLink,
                                style: {
                                    padding: '6px 10px',
                                    border: '1px solid #ccc',
                                    borderRadius: 6,
                                    background: 'white',
                                    cursor: 'pointer'
                                },
                                children: "Copy Link"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 604,
                                columnNumber: 15
                            }, this),
                            copyStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#16a34a'
                                },
                                children: copyStatus
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 616,
                                columnNumber: 30
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    marginLeft: 'auto',
                                    fontSize: 14,
                                    color: viewerConnected ? '#16a34a' : '#6b7280'
                                },
                                children: viewerConnected ? '● Viewer connected' : '○ Waiting for viewer…'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 617,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScreenShare.tsx",
                        lineNumber: 582,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                            gap: 12
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        margin: '8px 0',
                                        fontSize: 14,
                                        color: '#6b7280'
                                    },
                                    children: "Your screen preview"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ScreenShare.tsx",
                                    lineNumber: 637,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    ref: localVideoRef,
                                    autoPlay: true,
                                    playsInline: true,
                                    muted: true,
                                    style: {
                                        width: '100%',
                                        background: '#000',
                                        borderRadius: 6,
                                        aspectRatio: '16 / 9'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ScreenShare.tsx",
                                    lineNumber: 640,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ScreenShare.tsx",
                            lineNumber: 636,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScreenShare.tsx",
                        lineNumber: 629,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ScreenShare.tsx",
                lineNumber: 524,
                columnNumber: 9
            }, this),
            tab === 'view' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: 8,
                            alignItems: 'center',
                            marginBottom: 12,
                            flexWrap: 'wrap'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                placeholder: "Enter room ID",
                                value: joinRoomId,
                                onChange: (e)=>setJoinRoomId(e.target.value),
                                disabled: isViewing,
                                style: {
                                    padding: '8px 10px',
                                    border: '1px solid #ccc',
                                    borderRadius: 6,
                                    minWidth: 240
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 668,
                                columnNumber: 13
                            }, this),
                            !isViewing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: joinRoom,
                                style: {
                                    padding: '8px 14px',
                                    background: '#2563eb',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: 6,
                                    cursor: 'pointer'
                                },
                                children: "Join"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 683,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: leaveRoom,
                                style: {
                                    padding: '8px 14px',
                                    background: '#dc2626',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: 6,
                                    cursor: 'pointer'
                                },
                                children: "Leave"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 697,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: goFullscreen,
                                disabled: !isViewing,
                                style: {
                                    padding: '8px 14px',
                                    border: '1px solid #ccc',
                                    borderRadius: 6,
                                    background: 'white',
                                    cursor: 'pointer'
                                },
                                children: "Fullscreen"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 712,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScreenShare.tsx",
                        lineNumber: 659,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: remoteVideoViewRef,
                        autoPlay: true,
                        playsInline: true,
                        controls: true,
                        style: {
                            width: '100%',
                            background: '#000',
                            borderRadius: 6,
                            aspectRatio: '16 / 9'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScreenShare.tsx",
                        lineNumber: 727,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ScreenShare.tsx",
                lineNumber: 658,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ScreenShare.tsx",
        lineNumber: 468,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ScreenShare;
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime;
}),
];

//# sourceMappingURL=_0xylpe-._.js.map