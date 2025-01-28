import { useEffect, useRef, useState } from 'react'
import { io, Socket } from 'socket.io-client'

import './App.css'

function App() {
  const [input,setInput] = useState<string | null>(null)
  const [message,setMessages]=useState<string[]>([""])
  let socket=useRef<Socket | null>(null);
  const msgContainerRef = useRef<any>(null)

  useEffect(()=>{
    if(msgContainerRef.current)
      msgContainerRef.current.scrollTop = msgContainerRef.current?.scrollHeight
  },[message])
  
  useEffect(():any=>{
    
    socket.current = io("ws://localhost:3000")
     
    socket.current?.on('message',(message:string) => {
      console.log(message)
      setMessages(prev=>[...prev,message])
    })

    return(
      ()=>(socket.current?.disconnect())
    )

  },[])
 

  return (
    <>
    WebSockets Using Socket.io
    <div
      ref = {msgContainerRef}
      style={{"width":"250px", "height":"200px", "backgroundColor":"navy", "overflow":"scroll", }}>
    {message.map((msg)=>(
      <div key={Math.random()}>
        {msg}
      </div>
    ))}
    </div>
    <input style={{ "width":"100px", "height":"20px" }} type='text' value={ input || "" } 
      onChange={(e)=>{
        setInput(e.target.value)
      }}/>
    <button onClick={()=>{
      console.log(input)
      console.log(socket.current)
      socket.current?.emit("chatMessage",input)
      setInput('')
    }}>Send</button>

    </>
  )
}

export default App
