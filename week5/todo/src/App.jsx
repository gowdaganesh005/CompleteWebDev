import { useState } from 'react'

let counter=4
function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
    title:"go to gym",
    description:"go to gym at 2"
  },
  {
    id:2,
    title:"go to gym2",
    description:"go to gym at 2ssff"
  },
  {
    id:3,
    title:"go to gym3",
    description:"go to gym at 2y"
  }
  ])

  function addtodo(){
    setTodos([...todos,{
      id:counter,
      title:Math.random(),
      description: Math.random(),
    }])
    counter=counter+1;
  }

  return (
    <>
    <button onClick={addtodo}>Add a Todo</button>
    {todos.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description}/>)}
     //adding the key as a param but it doesnt used in the function todo but is necessary for the React under the hood for knowing what to rerender in the iterable components and necessary for efficeincy
     
    
    </>
  )
}

function Todo({title,description}){
  return<div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
}

export default App
