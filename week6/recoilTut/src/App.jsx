
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { CountAtom, IsEvenSelector } from './store/atoms/count'

// recoil

// here we didnt pass the the props any where and without worrying about the prop drlling problem and it doesnt re renders every time I increment and decrement even though 
// context api uses useState but recoils dosent
function App() {
  


  return (
   <>
   <RecoilRoot>
   
   <Count />

   </RecoilRoot>
   
   
   </>
  )
}
function Count({setCount}){
  console.log("count rerenderes") 
  return <div>
    <CountRenderer/>
    <Button  />
    <IsEven/>
  </div>


}


function CountRenderer(){
  const count=useRecoilValue(CountAtom)
 

return <><div>Count is {count}</div></>
}

function Button(){
  // const [count,setCount]=useRecoilState(CountAtom)  here actually the count is unnecessary so the button also not needs to re render
  // similar to setCount(c=>c+1)

  const setCount=useSetRecoilState(CountAtom)   /// no state is changed or no need of state variable here count so no rerenders only count number is rerendererd everytime
  console.log("buttons rerenders")
  
  return <>
  <button onClick={()=>setCount(count=>count+1)}>Increment</button>
  <button onClick={()=>setCount(count=>count-1)}>Decrement</button>
  
  </>

}
function IsEven(){   // this will run for every rernder even if count doesnt chnage in a more COMPLEX application so we can use useMemo() but recoil has its own tech Selectors which helps in creating derived state from other state
  const iseven=useRecoilValue(IsEvenSelector)
  return(
    <>
    {(iseven)?<div>it is even</div>:<></>}    </>
  )
}

export default App
