import express from "express"
import http from "http"
import cors from 'cors'
import socketio from "socket.io";

const app = express();
app.use(express.json())
app.use(cors())

const server = http.createServer(app)
const io = new socketio.Server(server,{cors:{
    origin: 'http://localhost:5173'
}})

io.on('connection',socket=>{
    console.log("new connection")
   
    socket.broadcast.emit("message","A user is connected ")
    socket.on("message",message=>{
        io.emit('message',message)
    })
    socket.on('chatMessage',(msg)=>{
        io.emit('message',msg)
    })
    socket.on('disconnect',()=>{
        console.log("user disconnected")
    })
})

server.listen(3000)
