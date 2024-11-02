import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Assignment2 from './Components/Assignment2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Assignment1/> */}
    <Assignment2/>
     {/*<Assignment3/> */}
    
    </>
  )
}

export default App
