const express=require('express');
const jwt= require('jsonwebtoken');
const mongoose=require('mongoose')

mongoose.connect("mongodb+srv://gowda:gowda@cluster0.gmjudtm.mongodb.net/tutdb/tut1")

const User=mongoose.model(
    "Users",{
       
        username: String,
        password: String,
    }

)
// const user=new User({
//     username:"rahul",
//     email: "jkfak@jkdsl",
//     password:"3472598475f"
// })

// user.save();
console.log("END")

const jwtKey="1234"

const app=express();
app.use(express.json());

const users=[
    {
        username:"user1",
        password:"1234" 
    },
    {
        username:"user2",
        password:"1234" 
    },
    {
        username:"user3",        
        password:"1234" 
    }
]

function userExists(username){
    
    if(User.findOne({username: username})){
        return true;
    }
    return False
}

app.post('/signin',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    if(!userExists(username,password)){
        console.log("User not exists")
         res.status(400).json({msg:"User does not exists"});
    }

    const token=jwt.sign({username:username},jwtKey);

    res.json({
        token: token,
    })
    


})

app.post("/signup",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;

    if(userExists(username,password)){
        console.log("User  exists")
         res.status(400).json({msg:"User exists"});

         const user=new User({
            username:username,
            
            password:password,
        })
        user.save();
    }
    

    

   
})

// app.get("/users",(req,res)=>{
//     const token=req.headers.authorization;
//     const decoded=jwt.verify(token,jwtKey);
//     const username=decoded.username;
//     res.json({
//         users: users.filter(user=>{
//             if(user.username==username){
//                 return false;
//             }
//             return true;
//         })
//     })
// })

app.listen("8000",()=>{
    console.log("Server listening on port 8000")
})
