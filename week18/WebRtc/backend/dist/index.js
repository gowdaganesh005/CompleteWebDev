"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8000 });
let senderSocket = null;
let reciverSocket = null;
wss.on("connection", (ws) => {
    ws.on("error", (error) => console.log(error));
    ws.on("message", (msg) => {
        msg = JSON.parse(msg);
        console.log(msg);
        if (msg.type === "sender") {
            console.log("sender set");
            senderSocket = ws;
        }
        else if (msg.type === "reciever") {
            console.log("reciever set");
            reciverSocket = ws;
        }
        else if (msg.type === "create-offer") {
            console.log("offer got");
            reciverSocket === null || reciverSocket === void 0 ? void 0 : reciverSocket.send(JSON.stringify({ type: "offer", sdp: msg.sdp }));
        }
        else if (msg.type === "create-answer") {
            console.log("answer got");
            senderSocket === null || senderSocket === void 0 ? void 0 : senderSocket.send(JSON.stringify({ type: "answer", sdp: msg.sdp }));
        }
        else if (msg.type === "iceCandidates") {
            if (ws === senderSocket) {
                console.log("sender candidates ", msg.candidates);
                reciverSocket === null || reciverSocket === void 0 ? void 0 : reciverSocket.send(JSON.stringify({ type: "iceCandidates", candidates: msg.candidates }));
            }
            else if (ws === reciverSocket) {
                console.log("reciver candidates ", msg.candidates);
                senderSocket === null || senderSocket === void 0 ? void 0 : senderSocket.send(JSON.stringify({ type: "iceCandidates", candidates: msg.candidates }));
            }
        }
    });
});
