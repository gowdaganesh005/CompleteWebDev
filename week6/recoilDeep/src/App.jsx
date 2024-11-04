import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRecoilValue } from 'recoil'
import { Mecount, messagingAtom, networkAtom, NotificationAtom } from './store/atoms/atoms'

function App() {
  const network=useRecoilValue(networkAtom)
  const notification=useRecoilValue(NotificationAtom)
  const message=useRecoilValue(messagingAtom)
  const meCount=useRecoilValue(Mecount)
  

  return (
    <>
    <button>Home</button> 

    <button>My Network {((network<100)?network:"99+")}</button>
    <button>Messages {((message<100)?message:"99+")}</button>
    <button>Notification {((notification<100)?notification:"99+")}</button>


    <button>Me {(meCount)}</button>
    </>
  )
}

export default App
