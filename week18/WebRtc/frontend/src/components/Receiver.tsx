import { useEffect, useRef } from "react"

export const Receiver = function(){
    const videoRef =useRef<HTMLVideoElement | null>(null)
    useEffect(()=>{
        const socket = new WebSocket("ws://localhost:8000");
        socket.onopen= ()=>{
            socket.send(JSON.stringify({type:"reciever"}))
        }
        startRecieving(socket);
    },[]);

    function startRecieving(socket :WebSocket){
        const video = document.createElement('video');
        document.body.appendChild(video);

        const pc = new RTCPeerConnection();

        pc.ontrack = (event) => {
            console.log("track ontrack")
            console.log(event);
            video.srcObject = new MediaStream([event.track]);
            
        }

        socket.onmessage = async (event) => {
            const message = JSON.parse(event.data);
            console.log(message)
            
            if(message.type== "offer"){
                

                
               
                await pc.setRemoteDescription(message.sdp);
                
                

                

                const answer= await pc.createAnswer();
                
                await pc.setLocalDescription(answer);
                
                socket?.send(JSON.stringify({type:"create-answer", sdp: pc.localDescription}))
                
            }
            else if( message.type == "iceCandidates" && message.candidate){
               pc.addIceCandidate(message.candidate)
            }
            
        }


    }
        

        
    
    return(
        <>
        
        
        
        </>
    )
}