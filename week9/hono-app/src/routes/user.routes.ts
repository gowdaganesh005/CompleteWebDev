import { Hono } from "hono";
import { Context } from "hono/jsx";


export const UserRouter=new Hono().basePath('/user')
UserRouter.get("/id/:userid",async (c:any)=>{
    console.log(c)
    const param=c.req.param("userid")
    const body=await c.res.body.json
    return c.json({message:"ypu are in the root directory ",
        userid:param,
        body: body
    })
})