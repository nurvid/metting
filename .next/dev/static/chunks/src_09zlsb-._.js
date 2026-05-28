(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/supabase.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getSupabaseClient",
    ()=>getSupabaseClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/index.mjs [app-client] (ecmascript) <locals>");
;
let supabaseClient = null;
function getSupabaseClient() {
    if (supabaseClient) return supabaseClient;
    const supabaseUrl = ("TURBOPACK compile-time value", "https://kuylxdodgnobrukmfurc.supabase.co");
    const supabaseAnonKey = ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1eWx4ZG9kZ25vYnJ1a21mdXJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MTk3MTgsImV4cCI6MjA5NTI5NTcxOH0.USL54IBdbnvGAe-mXYylticaJVSgf61lItgV3by28RE") || ("TURBOPACK compile-time value", "sb_publishable__Koz1ZZZ7813mQkjMIcWfw_gP-g5fSX");
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    supabaseClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(supabaseUrl, supabaseAnonKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
            detectSessionInUrl: false
        }
    });
    return supabaseClient;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ScreenShare.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/supabase.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const SIGNAL_EVENTS = {
    'join-request': 'join-request',
    'offer': 'offer',
    'answer': 'answer',
    'ice-candidate': 'ice-candidate'
};
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
    _s();
    const [tab, setTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('share');
    const [roomId, setRoomId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [shareLink, setShareLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isSharing, setIsSharing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isViewing, setIsViewing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [viewerConnected, setViewerConnected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copyStatus, setCopyStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [shareError, setShareError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [viewError, setViewError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [supabaseError, setSupabaseError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [joinRoomId, setJoinRoomId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showLocalPreview, setShowLocalPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isLikelySelfCapture, setIsLikelySelfCapture] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const localVideoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const remoteVideoViewRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const localStreamRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const channelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pcRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pendingCandidatesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const clientIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(makeClientId());
    const roleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mountedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    const teardownInProgressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const supabaseAvailableRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const trackEndedListenersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScreenShare.useEffect": ()=>{
            try {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
                supabaseAvailableRef.current = true;
            } catch  {
                supabaseAvailableRef.current = false;
            }
            const params = new URLSearchParams(window.location.search);
            const room = params.get('room');
            if (room) {
                setJoinRoomId(room);
                setTab('view');
            }
        }
    }["ScreenShare.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScreenShare.useEffect": ()=>{
            return ({
                "ScreenShare.useEffect": ()=>{
                    mountedRef.current = false;
                    void teardownSession();
                }
            })["ScreenShare.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ScreenShare.useEffect"], []);
    function updateConnectionStatus() {
        const state = pcRef.current?.iceConnectionState ?? 'new';
        if (roleRef.current === 'host') {
            setViewerConnected(state === 'connected' || state === 'completed');
        }
        if (roleRef.current === 'viewer') {
            setIsViewing(state === 'connected' || state === 'completed');
        }
    }
    function getViewerCount(channel) {
        const presence = channel.presenceState();
        return Object.values(presence).flat().filter((entry)=>entry.role === 'viewer').length;
    }
    function refreshPresenceStatus(channel) {
        if (roleRef.current === 'host') {
            const viewerCount = getViewerCount(channel);
            setViewerConnected(viewerCount > 0);
            return viewerCount;
        }
        return 0;
    }
    async function sendSignal(channel, event, payload) {
        await channel.send({
            type: 'broadcast',
            event: SIGNAL_EVENTS[event],
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
        const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabaseClient"])();
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
            event: SIGNAL_EVENTS['join-request']
        }, ({ payload })=>{
            const data = payload;
            if (role === 'host' && data.from && data.from !== clientIdRef.current) {
                void initiateHostOffer();
            }
        });
        channel.on('broadcast', {
            event: SIGNAL_EVENTS['offer']
        }, ({ payload })=>{
            const data = payload;
            if (role === 'viewer' && data.sdp) {
                void handleOffer(data.sdp);
            }
        });
        channel.on('broadcast', {
            event: SIGNAL_EVENTS['answer']
        }, ({ payload })=>{
            const data = payload;
            if (role === 'host' && data.sdp) {
                void handleAnswer(data.sdp);
            }
        });
        channel.on('broadcast', {
            event: SIGNAL_EVENTS['ice-candidate']
        }, ({ payload })=>{
            const data = payload;
            if (data.candidate) {
                void handleCandidate(data.candidate);
            }
        });
        channel.on('presence', {
            event: 'sync'
        }, ()=>{
            const viewerCount = refreshPresenceStatus(channel);
            if (role === 'host' && localStreamRef.current && !pcRef.current && viewerCount > 0) {
                void initiateHostOffer();
            }
        });
        channel.on('presence', {
            event: 'join'
        }, ()=>{
            const viewerCount = refreshPresenceStatus(channel);
            if (role === 'host' && localStreamRef.current && !pcRef.current && viewerCount > 0) {
                void initiateHostOffer();
            }
        });
        channel.on('presence', {
            event: 'leave'
        }, ()=>{
            const viewerCount = refreshPresenceStatus(channel);
            if (role === 'host' && viewerCount === 0) {
                setViewerConnected(false);
                if (pcRef.current) {
                    try {
                        pcRef.current.close();
                    } catch  {}
                    pcRef.current = null;
                }
            }
            if (role === 'viewer' && viewerCount === 0) {
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
                } catch  {}
            }
            if (channel) {
                try {
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$supabase$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSupabaseClient"])().removeChannel(channel);
                } catch  {}
            }
            if (localStreamRef.current) {
                localStreamRef.current.getTracks().forEach((track)=>track.stop());
                localStreamRef.current = null;
            }
            trackEndedListenersRef.current = [];
            if (localVideoRef.current) {
                localVideoRef.current.srcObject = null;
            }
            if (remoteVideoViewRef.current) {
                remoteVideoViewRef.current.srcObject = null;
            }
        } finally{
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
                audio: true
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
            trackEndedListenersRef.current = [
                ...tracks
            ];
            tracks.forEach((track)=>{
                track.addEventListener('ended', ()=>{
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
            el.requestFullscreen().catch(()=>{});
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "app-shell",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "app-frame",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "panel",
                style: {
                    padding: 20
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "room-row",
                        style: {
                            justifyContent: 'space-between'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "status-label",
                                        style: {
                                            margin: 0
                                        },
                                        children: "ShareScreen"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScreenShare.tsx",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "title",
                                        style: {
                                            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                                            marginTop: 6
                                        },
                                        children: [
                                            tab === 'share' ? 'Share' : 'View',
                                            " a screen"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScreenShare.tsx",
                                        lineNumber: 511,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 509,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `meta-pill ${viewerConnected ? 'status-ok' : 'status-wait'}`,
                                children: isSharing ? 'Broadcasting' : isViewing ? 'Viewing' : 'Ready'
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 516,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScreenShare.tsx",
                        lineNumber: 508,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "tabbar",
                        "aria-label": "Share or view",
                        style: {
                            marginTop: 18
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `tab ${tab === 'share' ? 'is-active' : ''}`,
                                onClick: ()=>setTab('share'),
                                children: "Share"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 522,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `tab ${tab === 'view' ? 'is-active' : ''}`,
                                onClick: ()=>setTab('view'),
                                children: "View"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 528,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScreenShare.tsx",
                        lineNumber: 521,
                        columnNumber: 11
                    }, this),
                    (shareError || viewError || supabaseError) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "notice",
                        style: {
                            marginTop: 16
                        },
                        children: shareError || viewError || supabaseError
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScreenShare.tsx",
                        lineNumber: 537,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            height: 18
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/ScreenShare.tsx",
                        lineNumber: 542,
                        columnNumber: 11
                    }, this),
                    tab === 'share' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid",
                        style: {
                            gap: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "room-row",
                                style: {
                                    justifyContent: 'space-between'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "copy-hint",
                                        children: viewerConnected ? 'Viewer connected' : isSharing ? 'Waiting for viewer' : 'Create a link to begin'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScreenShare.tsx",
                                        lineNumber: 547,
                                        columnNumber: 17
                                    }, this),
                                    roomId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "copy-hint",
                                        children: copyStatus || 'Room link ready'
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScreenShare.tsx",
                                        lineNumber: 555,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 546,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "toolbar",
                                style: {
                                    marginTop: 0,
                                    marginBottom: 0
                                },
                                children: !isSharing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "button button-ink",
                                            onClick: createMeetingLink,
                                            children: "Create link"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ScreenShare.tsx",
                                            lineNumber: 564,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "button button-primary",
                                            onClick: startSharing,
                                            children: roomId ? 'Start sharing' : 'Create and start'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ScreenShare.tsx",
                                            lineNumber: 567,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "button button-danger",
                                    onClick: stopSharing,
                                    children: "Stop sharing"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ScreenShare.tsx",
                                    lineNumber: 572,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 561,
                                columnNumber: 15
                            }, this),
                            roomId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    marginTop: 2
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "room-code",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: shareLink || buildInviteUrl(roomId)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ScreenShare.tsx",
                                            lineNumber: 581,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScreenShare.tsx",
                                        lineNumber: 580,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "toolbar",
                                        style: {
                                            marginTop: 12,
                                            marginBottom: 0
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "button button-ghost",
                                            onClick: copyShareLink,
                                            children: "Copy link"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ScreenShare.tsx",
                                            lineNumber: 584,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ScreenShare.tsx",
                                        lineNumber: 583,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 579,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "video-shell",
                                children: isSharing && !showLocalPreview ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "empty-state",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'grid',
                                            gap: 10,
                                            justifyItems: 'center',
                                            padding: 18
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: isLikelySelfCapture ? 'Preview hidden to avoid the “infinite mirror” effect.' : 'Preview hidden.'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScreenShare.tsx",
                                                lineNumber: 595,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "button button-ghost",
                                                onClick: ()=>setShowLocalPreview(true),
                                                children: "Show preview anyway"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ScreenShare.tsx",
                                                lineNumber: 600,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/ScreenShare.tsx",
                                        lineNumber: 594,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ScreenShare.tsx",
                                    lineNumber: 593,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    ref: localVideoRef,
                                    className: "video",
                                    autoPlay: true,
                                    playsInline: true,
                                    muted: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ScreenShare.tsx",
                                    lineNumber: 606,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 591,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScreenShare.tsx",
                        lineNumber: 545,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid",
                        style: {
                            gap: 16
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "video-shell",
                                children: isViewing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                    ref: remoteVideoViewRef,
                                    className: "video",
                                    autoPlay: true,
                                    playsInline: true,
                                    controls: true
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ScreenShare.tsx",
                                    lineNumber: 614,
                                    columnNumber: 19
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "empty-state",
                                    children: "No stream yet. Paste the room ID and join."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ScreenShare.tsx",
                                    lineNumber: 622,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 612,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "room-card",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "toolbar",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: "field",
                                            type: "text",
                                            placeholder: "Paste room ID",
                                            value: joinRoomId,
                                            onChange: (e)=>setJoinRoomId(e.target.value),
                                            disabled: isViewing
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ScreenShare.tsx",
                                            lineNumber: 630,
                                            columnNumber: 19
                                        }, this),
                                        !isViewing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "button button-primary",
                                            onClick: joinRoom,
                                            children: "Join"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ScreenShare.tsx",
                                            lineNumber: 639,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "button button-danger",
                                            onClick: leaveRoom,
                                            children: "Leave"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ScreenShare.tsx",
                                            lineNumber: 643,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "button button-ghost",
                                            onClick: goFullscreen,
                                            disabled: !isViewing,
                                            children: "Fullscreen"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ScreenShare.tsx",
                                            lineNumber: 647,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ScreenShare.tsx",
                                    lineNumber: 629,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ScreenShare.tsx",
                                lineNumber: 628,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ScreenShare.tsx",
                        lineNumber: 611,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ScreenShare.tsx",
                lineNumber: 507,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ScreenShare.tsx",
            lineNumber: 506,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ScreenShare.tsx",
        lineNumber: 505,
        columnNumber: 5
    }, this);
}
_s(ScreenShare, "cC6JvF33QgAYXwweKUR8MU0G5ZU=");
_c = ScreenShare;
const __TURBOPACK__default__export__ = ScreenShare;
var _c;
__turbopack_context__.k.register(_c, "ScreenShare");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_09zlsb-._.js.map