const express=require('express');

const app=express();

app.use(express.json());

app.get("/todos",(req,res)=>{
    
})
app.post("/todo",(req,res)=>{
    
})
app.put("/markdone",(req,res)=>{
    
})


app.listen("8000",()=>{
   console.log("Server listening on port 8000")
})