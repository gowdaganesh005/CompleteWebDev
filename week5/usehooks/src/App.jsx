import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [input,setInput]=useState(0);   // as the count state variable state changes the entire factorial part also rerenders ans an expensive task even though the input value doesnt changes
  const [count,setCount]=useState(0);

  let sum=useMemo(()=>{
    console.log("memo called")

    let ans=0;
    for(let i=0;i<=input;i++){
      ans=ans+i;
    }

    return ans;


  },[input])
 

  return (
   <>
   <input type="text" onChange={(e)=>{

    setInput(e.target.value)
   }}/>
   <div>Sum is {sum}</div>

   <button onClick={()=>setCount(count+1)}>Counter {count}</button>

   
   </>
  )
}



// function Todo({id}){
//   const [todos, setTodos] = useState([
//     {
//       id:1,
//       title:"goto gym",
//       description:"make youself strong",
//     },
//     {
//       id:2,
//       title:"goto library",
//       description:"make youself strong academically",
//     },
//     {
//       id:3,
//       title:"goto market",
//       description:"bring veggies",
//     }
//   ])
//   const todo=todos.find((todo)=>todo.id==id)
//   console.log(id)
  
// return(
//   <>
  
//       <div>
//         <h1>{todo.title}</h1>
//         <p>{todo.description}</p>
//       </div>
    
//   </>
// )

 

 
    
// }

 export default App
