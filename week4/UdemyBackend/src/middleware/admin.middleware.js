import { Admin } from "../db/db.models.js"


async function  adminMiddleware(req,res,next){

    const username=req.headers.username
    const password=req.headers.password

    const admin=await Admin.findOne({
        username:username,
        password:password
    })
    if(admin){
        next();
    }else{
        res.status(403).json({
            msg: "Admin not found"
        })
    }

}
export default adminMiddleware