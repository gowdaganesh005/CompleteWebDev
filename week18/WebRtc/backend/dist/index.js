"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8000 });
wss.on("connection", (ws) => {
    ws.on("error", (error) => console.log(error));
    ws.on("message", (msg) => {
        msg = JSON.parse(msg.toString());
        console.log(msg);
    });
    ws.send("something");
});
