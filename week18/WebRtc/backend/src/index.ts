import {WebSocketServer, WebSocket} from "ws";

const wss=new WebSocketServer({port:8000});

let senderSocket:null | WebSocket=null;
let reciverSocket:null | WebSocket = null;


wss.on("connection",(ws)=>{
   ws.on("error",(error)=>console.log(error))

   ws.on("message",(msg:any)=>{
    msg=JSON.parse(msg)
    console.log(msg);
    
    if(msg.type === "sender"){
        console.log("sender set")
        senderSocket = ws;
    }else if(msg.type === "reciever"){
        console.log("reciever set")
        reciverSocket = ws;
    }else if( msg.type === "create-offer"){
        console.log("offer got")
        reciverSocket?.send(JSON.stringify({type:"offer", sdp: msg.sdp}))
    }else if(msg.type === "create-answer") {
        console.log("answer got")
        senderSocket?.send(JSON.stringify({type:"answer", sdp: msg.sdp   }))
    }else if(msg.type === "iceCandidates") {
        if(ws === senderSocket){
            console.log("sender candidates ",msg.candidates)
            reciverSocket?.send(JSON.stringify({type:"iceCandidates",candidates: msg.candidates}))
        }
        else if(ws === reciverSocket){
            console.log("reciver candidates ",msg.candidates)
            senderSocket?.send(JSON.stringify({type:"iceCandidates",candidates: msg.candidates}))
        }
    }

   

})})