const asyncHandler = require('express-async-handler')
const User = require('../models/user') 
const bcrypt = require('bcryptjs');
const { createError } = require('../utils/error');
const jwt = require('jsonwebtoken')


const authRegUser = asyncHandler(async(req,res,next)=>{
    try{
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            profile:req.body.profile
        })
        await newUser.save()
        res.status(200).json('user created succesfully')

    }catch(err){
        next(err)
    }
})

const authLogin = asyncHandler(async(req,res,next)=>{
    try{
        const user = await User.findOne({email:req.body.email})
        if(!user) return next(createError(404,'User not found!'))
        let isPasswordCorrect = await bcrypt.compareSync(req.body.password, user.password)
        if(!isPasswordCorrect) return next(createError(404,'Incorrect email or Password'))

        const token = jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT_SECRET)

        const {password,isAdmin, ...otherDetails} = user._doc;
        res.cookie("access_token",token,{
            httpOnly:true,
        }).status(200).json({...otherDetails})

    }catch(err){
        next(err)
    }
})

module.exports = {authRegUser,authLogin}