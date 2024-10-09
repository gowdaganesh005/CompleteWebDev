import { useState } from "react";

export function CreateTodo(){
 const [title,setTitle]=useState("");
 const [description,setdescription]=useState("");
    return (
        <div>
            <input type="text" style={{
                padding: 10,
                margin: 10
            }} placeholder="title" onChange={(e)=>setTitle(e.target.value)}/><br /><br />
            <input type="text" style={{
                padding: 10,
                margin: 10
            }}  placeholder="description" onChange={(e)=>setdescription(e.target.value)}/><br /> <br />

            <button style={{
                padding: 10,
                margin: 10
            }} 
            onClick={()=>{
                fetch("http://localhost:8000/todo",{
                    method:"POST",
                    body:JSON.stringify({
                        title: title,
                        description: description,
                    }),
                    headers:{
                        "Content-type":"application/json"

                    }
            })
                .then(async(res)=>{
                    const data=await res.json();
                    alert("Todo added")
                })
            }}
            
            
            >Add todo</button>
        </div>
    )
}