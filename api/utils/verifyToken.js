const jwt = require('jsonwebtoken')
const {createError} = require('../utils/error')



const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token;
            if(!token) return next(createError(401,'you are not authenticated!'))
        
            jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
                if(err) return next(createError(403,'Token is invalid'))
                req.user = user;
                next()
            })
}

const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        console.log("hbscg",req.user.id)
        console.log(req.params.id)
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            return next(createError(401,"You dont have access"))
        }
    })

}

const verifyAdmin = (req, res, next)=>{
    verifyToken(req,res,next,()=>{
        console.log("hbscg",req.user.id)
        console.log("hy",req.params.id)
        if(req.user.isAdmin){
            next()
        }else{
            return next(createError(401,"You dont have access"))
        }
    })

}

module.exports = {verifyToken,verifyUser,verifyAdmin}



// module.exports = {
//     verifyUser: function(req,res,next) {
        // verifyToken(req,res,()=>{
        //     if(req.user.id === req.params.id || req.user.isAdmin){
        //         next()
        //     }else{
        //         return next(createError(401,"You dont have access"))
        //     }
        // })

//     }
// }