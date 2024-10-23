import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   {/* <CardWrapper object={<Text text="happy birthday"/>}/>  other way to do it but next one is used*/}  

   <CardWrapper  >
    <CardWrapper>
    <CardWrapper>
    <div>
      hi there
    </div>
    </CardWrapper>
    </CardWrapper>
    </CardWrapper>

   
   </>
  )
}

// function Text({text}){
//   return (<>
//   <p>{text}</p>
//   </>)
// }

function CardWrapper({children}){  // children is special here to take the inner components automatically but doesnt work with other name like object
  return (
    <div style={{border:"2px solid black",width:"fit",padding:"5px"}}>
      {children}
    </div>
  )
}

export default App
