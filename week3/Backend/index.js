const express=require('express');
const {createTodo} =require('./types.js')

const app=express();

app.use(express.json());

app.get("/todos",(req,res)=>{
    
})
app.post("/todo",(req,res)=>{
   const createPayload=req.body();
   const parsePayload=createTodo.safeParse(createPayload);
   if(!parsePayload.success){
      res.status(411).json(
         {
            msg: "You sent a wrong inputs"
         }
      )
      return;

   }
    
})
app.put("/markdone",(req,res)=>{
   const createPayload=req.body();
   const parsePayload=createTodo.safeParse(createPayload);
   if(!parsePayload.success){
      res.status(411).json(
         {
            msg: "You sent a wrong inputs"
         }
      )
      return;

   }

    
})


app.listen("8000",()=>{
   console.log("Server listening on port 8000")
})