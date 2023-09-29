const asyncHandler = require('express-async-handler') 
const User = require('../models/user')
const { createError } = require('../utils/error')

const createUser = asyncHandler(async(req,res,next)=>{
    const newUser = new User(req.body)
    try{
        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    }catch(err){
        next(err)
    }
})
const updateUser = asyncHandler(async(req,res,next)=>{
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser)
    }catch(err){
        next(err)
    }
})
const deleteUser = asyncHandler(async(req,res,next)=>{
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("user dealeted succesfully")
    }catch(err){
        next(err)
    }
})
const getUser = asyncHandler(async(req,res,next)=>{
    try{
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    }catch(err){
        next(err)
    }
})
const getAllUser = asyncHandler(async(req,res,next)=>{
    try{
        const users = await User.find()
        res.status(200).json(users)
    }catch(err){
        next(err)
    }
})

module.exports = {createUser,updateUser,deleteUser,getUser,getAllUser}