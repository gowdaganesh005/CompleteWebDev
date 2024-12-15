import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [messages,setMessages]=useState<any>([])
  const [input,setInput]=useState("")
  useEffect(()=>{
    const ws=new WebSocket("ws://localhost:8000")
    ws.onopen=()=>{
      console.log("connected")
      setSocket(ws)
    }
    ws.onmessage=(message)=>{
      console.log("Recived message:",message.data);
      setMessages((prev:any)=>[...prev,message.data])

    }
   
  },[])
  if(!socket){
    return(
      <>
      Connecting to the server...
      </>
    )
  }

  return (
    <>
    <input onChange={(e)=>setInput(e.target.value)} type="text" />
    <button onClick={()=>{
      socket.send(input)
    }}>Send</button>
    {messages.map((mes:string)=>(<div>{mes}</div>))}

    </>
  )
}

export default App
