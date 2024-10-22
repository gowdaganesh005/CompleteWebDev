import mongoose from 'mongoose'


mongoose.connect("mongodburl")

const AdminSchema =new mongoose.Schema(
    {
        username: String,
        password: String,
       
    }
)

const UserSchema =new mongoose.Schema(
    {
        username: String,
        password: String,
        purchasedCourses:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }
    }
)
const CourseSchema= new mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    
})

const User=mongoose.model('User',UserSchema)
const Admin=mongoose.model('Admin',AdminSchema)
const Course=mongoose.model('Course',CourseSchema)

export{
    User,
    Admin,
    Course

}