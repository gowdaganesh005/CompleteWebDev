
import { todosAtomFamily } from './store/atoms/todoAtoms'
import { useRecoilValue } from 'recoil'



function App() {
  

  return (
   <>
   <Todo id={1}/>
   <Todo id={2}/>
   <Todo id={1}/>
   <Todo id={2}/>
   <Todo id={2}/>
   <Todo id={2}/>
   
   </>
  )
}

function Todo({id}){
  const todo=useRecoilValue(todosAtomFamily(id))
  console.log(todo)
  return(
    <>
    <div><b>{todo.title}</b></div>
    <div>{todo.description}</div>
    <br /><br /><br />
    </>
  )
}

export default App
