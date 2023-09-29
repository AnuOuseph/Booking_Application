const express = require('express')
const dotenv = require('dotenv')
const connectDb = require('./config/db')
const app =express()
const authRouter = require('./routes/auth')
const placeRouter = require('./routes/places')
//const userRouter = require('./routes/user')
const roomRouter = require('./routes/rooms')
const cookieParser = require('cookie-parser')
const cors = require('cors')

dotenv.config()
connectDb()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/auth',authRouter)
app.use('/api/place',placeRouter)
//app.use('/api/user',userRouter)
app.use('/api/rooms',roomRouter)

app.use((err,req,res,next)=>{
    const errStatus = err.status || 500;
    const errMessage = err.message || "something went wrong";
    return res.status(errStatus).json(errMessage)
})

app.get('/',(req,res)=>{
    res.send('hello')
})

const port = process.env.PORT || 5000;
app.listen(port,console.log(`sever connected on ${port} `))