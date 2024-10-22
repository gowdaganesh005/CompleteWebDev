import express from 'express';
import {router} from '../routes/admin.routes.js'
import router1 from '../routes/user.routes.js'

const adminRouter=router
const userRouter=router1

const app=express();
app.use(express.json());

app.use('/admin',adminRouter)
app.use('/user',userRouter)
app.listen("8000",function(){
    console.log("Server listening on port 8000");
})