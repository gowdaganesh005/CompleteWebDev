import { useState } from 'react'
import {Sender} from "./components/Sender";
import {Receiver} from "./components/Receiver"
import { BrowserRouter,Route ,Routes} from 'react-router-dom';
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="sender" element={<Sender/> }/>
        <Route path="reciever" element={<Receiver/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
