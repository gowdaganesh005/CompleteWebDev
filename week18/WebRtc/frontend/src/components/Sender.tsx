import { useEffect, useRef, useState } from "react";

export const Sender=function(){
    const [socket,setSocket]=useState<WebSocket | null>(null)
    const [pc,setPc]=useState<RTCPeerConnection |null>(null)
    const videoRef=useRef<any>()
     useEffect(()=>{
        const socket = new WebSocket("ws://localhost:8000");
        
        socket.onopen= ()=>{
            socket.send(JSON.stringify({type:"sender"}))
        }
        setSocket(socket)
    },[])


    
    async function sendVideoCall(){
        const stream = await navigator.mediaDevices.getUserMedia({video:true, audio:false})
        console.log(stream)
        
        if(videoRef.current){
            videoRef.current.srcObject = new MediaStream([stream.getVideoTracks()[0]])
        }
        if(socket === null) return;
        const pc = new RTCPeerConnection();
        setPc(pc)
        pc.addTrack(stream.getVideoTracks()[0])
        pc.onnegotiationneeded = async () => {
        console.log("on negotiation")
        const offer = await  pc.createOffer();
        await pc.setLocalDescription(offer) 
        socket?.send(JSON.stringify({type:"create-offer",sdp: pc.localDescription}))
        }
        

        pc.onicecandidate= (event)=>{
            console.log(event);
            if(event.candidate){
                socket.send(JSON.stringify({type:"iceCandidates",candidates: event.candidate}))
            }
        }

        

        socket.onmessage = async (event)=>{
            const message = JSON.parse(event.data);
            if(message.type === "create-answer"){
                pc.setRemoteDescription(message.sdp)
            }else if(message.type === "iceCandidates"){
                pc.addIceCandidate(message.candidate)
            }
        }

        

    }
    return(
        <>
            <button onClick={sendVideoCall}>Send Video</button>
            <video  autoPlay ref={videoRef}></video>
        </>
    )
}