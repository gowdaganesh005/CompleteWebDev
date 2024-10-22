import { Router } from "express"
import { Admin,Course } from "../db/db.models.js";
import adminMiddleware from "../middleware/admin.middleware.js";


const router=Router();

router.post('/signup',async (req,res)=>{
    console.log("reached the signup page")
    const username=req.body.username;
    const password=req.body.password;

    const admin=Admin.create({
        username,
        password
    })
    if(admin){
        res.json({
            msg: "admin is created"
        })
    }
    else{res.status(400).json({
        msg: " error , admin is not created"
    })
}
})

router.post('/course',adminMiddleware,async (req,res)=>{
    const title=req.body.title;
    const description=req.body.description;
    const price=999;

    const course= await Course.create({
        title,
        price,
        description,
    })  
    
    console.log(course);
    res.status(200).json({
        msg:"course created",
        courseId:course._id,
    })

})


router.get('/course',adminMiddleware,async (req,res)=>{
      
    
    const courses=await Course.find({})
    if(courses){
        res.json(courses)
    }
    else{res.json({
        err: "cannot fetch course"
    })
}
    

})

export { router }





