const mongoose=require('mongoose');

mongoose.connect("mongodb url")


const todoSchema=mongoose.Schema(
    {
        title: String,
        descrition: String,
        completed: boolean,
    }

)

const todo=mongoose.model("todos",todoSchema);

module.exports={
    todo
}