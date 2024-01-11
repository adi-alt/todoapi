import mongoose from "mongoose";

const taskschema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true,
        unique:true
    },
    iscompleted:{
        type:Boolean,
        default:false
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "user",
        required:true,
    }
})

export const task = mongoose.model("task",taskschema)