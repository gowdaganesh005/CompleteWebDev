import { useState } from 'react'
import {Sender} from "./components/Sender";
import {Reciever} from "./components/Receiver"
import { BrowserRouter,Route } from 'react-router-dom';
import './App.css'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Route path="/sender" element={<Sender/> }/>
        <Route path="/reciever" element={<Reciever/>}/>

      </BrowserRouter>
    </>
  )
}

export default App
