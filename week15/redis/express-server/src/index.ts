import express from "express"
import { createClient } from "redis"

const app=express()
app.use(express.json())

const client=createClient()
async function connect(){
   await  client.connect()
   console.log("connected to redis")
}
connect()

app.post("/",async (req,res)=>{
    const data={pid:"124",pname:"sum of 2",random:Math.random()}
    await client.lPush("submissions",JSON.stringify(data))
    res.json({message:"submitted"})
})

app.listen(3000)

 