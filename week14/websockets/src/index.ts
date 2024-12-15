import http from 'http';
import WebSocket ,{ WebSocketServer } from "ws"

const server=http.createServer(function(request:any,response:any){
    console.log((new Date())+" Recived request for "+request.url);
    response.end("hi there");
})

const wss=new WebSocketServer({server})
let usercount=0

wss.on('connection',function(socket){
    socket.on('error',(err)=>console.log("Error"+err))
    
    socket.on('message',function(data,isBinary){
        wss.clients.forEach(function(client){
            if(client.readyState==WebSocket.OPEN){
                client.send(data,{binary:isBinary})
            }
        }

        )
    })
    console.log("user connected ",++usercount)
    socket.send("connected to web socket")
    

    
})

server.listen(8000)