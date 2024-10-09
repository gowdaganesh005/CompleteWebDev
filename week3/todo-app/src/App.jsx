import { CreateTodo } from './Components/CreateTodo'
import './App.css'
import { useState } from 'react';
import { Todos } from './Components/Todos'

function App() {
  const [todos,setTodos]=useState([]);

  fetch("http://localhost:8000/todos")
  .then(async function(res) {
    const data=await res.json()
    setTodos(data.todos)
    
  })
  

  return (
    <>
     <div>Hi There</div>
     <CreateTodo></CreateTodo>
     <Todos todos={todos}></Todos>
    </>
  )
}

export default App
