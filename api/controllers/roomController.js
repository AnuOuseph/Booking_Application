const asyncHandler = require('express-async-handler')
const Room = require('../models/rooms')
const Hotel = require('../models/places')
const {createError} = require('../utils/error')


const createRoom = asyncHandler(async(req,res,next)=>{
    const newRoom = new Room(req.body)
    const hotelId = req.params.hotelid;
    try{
        const savedRoom = await newRoom.save();
        try{
            await Hotel.findByIdAndUpdate(hotelId,{$push:{rooms:savedRoom._id}})
        }catch(err){
            next(err)
        }
        res.status(200).json(savedRoom)
    }catch(err){
        next(err)
    }
})
const updateRoom = asyncHandler(async(req,res,next)=>{
    try{
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedRoom)
    }catch(err){
        next(err)
    }
})
const deleteRoom = asyncHandler(async(req,res,next)=>{
    const hotelId = req.params.hotelid;
    try{
        await Room.findByIdAndDelete(req.params.id)
        try{
            await Hotel.findByIdAndUpdate(hotelId,{$pull:{rooms:req.params.id}})
        }catch(err){
            next(err)
        }
        res.status(200).json("room dealeted succesfully")
    }catch(err){
        next(err)
    }
})
const getRoom = asyncHandler(async(req,res,next)=>{
    try{
        const room = await Room.findById(req.params.id)
        res.status(200).json(room)
    }catch(err){
        next(err)
    }
})
const getAllRoom = asyncHandler(async(req,res,next)=>{
    try{
        const rooms = await Room.find()
        res.status(200).json(rooms)
    }catch(err){
        next(err)
    }
})

module.exports = {createRoom,updateRoom,deleteRoom,getRoom,getAllRoom}