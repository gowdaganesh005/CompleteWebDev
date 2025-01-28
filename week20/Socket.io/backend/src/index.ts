import express from "express"
import http from "http"
import cors from 'cors'
import socketio from "socket.io";

const app = express();
app.use(express.json())
app.use(cors())

const server = http.createServer(app)
const io = new socketio.Server(server)

io.on('connection',socket=>{
    console.log("new connection")
})