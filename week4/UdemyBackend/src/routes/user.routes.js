import { Router } from "express"
import { User,Course } from "../db/db.models.js";
import UserMiddleware from "../middleware/user.middleware.js";


const router=Router();

router.post('/signup',async (req,res)=>{
    console.log("reached the signup page")
    const username=req.body.username;
    const password=req.body.password;

    const user=await User.create({
        username,
        password
    })
    if(user){
        res.json({
            msg: "user is created"
        })
    }
    else{res.status(400).json({
        msg: " error , user is not created"
    })
}
})

router.post('/course/:courseid',UserMiddleware,async (req,res)=>{
    const courseid=req.params.courseid;


    const username=req.headers.username;
    const password =req.headers.password;

    const user=await User.updateOne({username,password},{
        $push:{
            purchasedCourses: courseid
        }})

        if(user){
            res.json({
                msg: "course is purchaseed"
            })
        }
        else{res.status(400).json({
            msg: " error , course not created"
        })}

    

    

})


router.get('/course',async (req,res)=>{
      
    
    const courses=await Course.find({})
    if(courses){
        res.json(courses)
    }
    else{res.json({
        err: "cannot fetch course"
    })
}
    

})

export  default router;





