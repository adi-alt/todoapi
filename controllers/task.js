import errorhandler from "../middlewares/error.js";
import { task } from "../models/task.js";
export const newtask = async(req,res,next)=>{
    try {
        const {title,description} = req.body;
    await task.create({
        title,description,user:req.user
    })
    res.status(201).json({
        success:true,
        message:"task created successfully"
    })
    } catch (error) {
        next(error)
    }
} 

export const gettaskall = async(req,res,next)=>{
    try {
        // whenever we find anything in the mongodb then we are given the accesss to the element we are finding and _id gives objectid 
    const user = req.user._id;
    // console.log(req.user._id)
    const tasks = await task.find({user});
    res.status(200).json({
        success:true,
        tasks
    })
    } catch (error) {
        next(error)
    }
}
export const updatetask = async(req,res,next)=>{
    try {
        const currtask = await task.findById(req.params.id);

    // error handling can be done with the help of next and middleware
    if(!currtask)return next(new errorhandler("no such task exists",404))
    console.log(currtask)
    currtask.iscompleted = !currtask.iscompleted;
    await currtask.save();
    res.status(200).json({
        success:true,
        message:"updated"
    })
    } catch (error) {
        next(error)
    }
}
export const deltask = async(req,res,next)=>{
    try {
        const currtask = await task.findById(req.params.id);
    if(!currtask)return next(new errorhandler("no such task exists",404))
    await currtask.deleteOne();
    res.status(200).json({
        success:true,
        message:"delete"
    })
    } catch (error) {
        next(error)
    }
}