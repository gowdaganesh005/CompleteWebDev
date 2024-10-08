const express=require('express');
const {createTodo, updateTodo} =require('./types.js');
const { todo } = require('./db.js');
const cors=require('cors')

const app=express();

app.use(express.json());

app.use(cors({
   origin:"http://localhost:5173"
}))

app.get("/todos",async (req,res)=>{
   const todos=await todo.find({});
   res.json({
      todos: todos
   })
    
})
app.post("/todo",async (req,res)=>{
   const createPayload=req.body;
   const parsePayload=createTodo.safeParse(createPayload);
   if(!parsePayload.success){
      res.status(411).json(
         {
            msg: "You sent a wrong inputs"
         }
      )
      return;

   }
   await todo.create({
      title: createPayload.title,
      description: createPayload.description,
      completed: false,

   })

   res.json({
      msg: "todo created"
   })
    
})
app.put("/markdone",async (req,res)=>{
   const createPayload=req.body;
   const parsePayload=updateTodo.safeParse(createPayload);
   if(!parsePayload.success){
      res.status(411).json(
         {
            msg: "You sent a wrong inputs"
         }
      )
      return;

   }
   await todo.updateOne({
      _id: req.body.id

   },{
      completed: true
   })

   res.json({
      msg: "marked as done"
   })

    
})


app.listen("8000",()=>{
   console.log("Server listening on port 8000")
})