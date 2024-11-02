import { useContext, useState } from 'react'
import { CountCountext } from './context'


function App() {
  const [count, setCount] = useState(0)

  //context api

  //wrapp the childres who eant to use the context value

  return (
   <>
   <CountCountext.Provider value={count}>
   <Count setCount={setCount}/>
   </CountCountext.Provider>
   
   </>
  )
}
function Count({setCount}){
  console.log("count rerenderes")  // even though the count doesnt use count state but it rerenders as parent re renders
  //so context api doesnt make performance efficieny but it makes dev experirince easier by solving prop drilling so passing state variables to one comp to comp
  return <div>
    <CountRenderer/>
    <Button  setCount={setCount}/>
  </div>


}


function CountRenderer(){
  const count=useContext(CountCountext);
return <><div>Count is {count}</div></>
}

function Button({setCount}){
  const count=useContext(CountCountext);
  return <>
  <button onClick={()=>setCount(count+1)}>Increment</button>
  <button onClick={()=>setCount(count-1)}>Decrement</button>
  
  </>

}

export default App
