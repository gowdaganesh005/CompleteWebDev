import {WebSocketServer, WebSocket} from "ws";

const wss=new WebSocketServer({port:8000});

let senderSocket:null | WebSocket=null;
let reciverSocket:null | WebSocket = null;


wss.on("connection",(ws)=>{
   ws.on("error",(error)=>console.log(error))

   ws.on("message",(msg:any)=>{
    msg=JSON.parse(msg)
    console.log(msg);
    
    if(msg.type === "identify-as-sender"){
        senderSocket = ws;
    }else if(msg.type === "identify-as-reciever"){
        reciverSocket = ws;
    }else if( msg.type === "create-offer"){
        reciverSocket?.send(JSON.stringify({type:"offer", sdp: msg.sdp}))
    }else if(msg.type === "create-answer") {
        senderSocket?.send(JSON.stringify({type:"answer", sdp: msg.sdp   }))
    }else if(msg.type === "iceCandidates") {
        if(ws === senderSocket){
            reciverSocket?.send(JSON.stringify({type:"candidates",candidates: msg.candidates}))
        }
        else if(ws === reciverSocket){
            senderSocket?.send(JSON.stringify({type:"ice-candidates",candidates: msg.candidates}))
        }
    }

   ws.send("something")

})})