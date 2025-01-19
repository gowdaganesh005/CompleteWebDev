import express from "express";
import { prismaClient } from "./db";

export const app=express();
app.use(express.json());

app.post("/sum",async (req,res)=>{
    const data=req.body;
    const ans = data.a + data.b;
    const response = await prismaClient.sum.create({
        data:{
            sum:ans
        }
    })
    res.status(200).json({
        ans:ans
    })

})