const mongoose = require('mongoose')
const hotelSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        images:{
            type:[String],
        },
        city:{
            type:String,
            required:true,
        },
        type:{
            type:String,
        },
        amount:{
            type:Number,
            required:true,
        },
        rooms:{
            type:[String],
        },
        headline:{
            type:String,
        },
        desc:{
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            min:0,
            max:5,
        },
        featured:{
            type:Boolean,
            default:false,
        }
    }
)
const Hotel = mongoose.model('Hotel',hotelSchema)

module.exports= Hotel;



