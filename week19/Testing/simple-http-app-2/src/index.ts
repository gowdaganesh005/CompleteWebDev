import express from "express"

export const app = express()
app.use(express.json())

app.post("/sum",(req,res)=>{
    const param =req.body;
    res.status(200).json({
        answer:param.a + param.b
    })
})
