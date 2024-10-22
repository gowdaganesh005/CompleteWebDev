import { User } from "../db/db.models.js"


async function  userMiddleware(req,res,next){

    console.log("user middleware found")

    const username=req.headers.username
    const password=req.headers.password

    const user=await User.findOne({
        username,
        password
    })
    if(user){
        next();
    }else{
        res.status(403).json({
            msg: "User not found"
        })
    }

}
export default userMiddleware