import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectCloudinary from './config/cloudnary.js'
import connectDB from './config/mongodb.js'
import userRouter from './routes/userRounte.js'
import productRounter from './routes/productRount.js'
import cartRounter from './routes/cartRount.js'
import orderRouter from './routes/orderRount.js'

const app = express()
const port = process.env.PORT || 4000
connectDB
connectCloudinary()



//middleware

app.use(express.json());
app.use(cors())

app.use('/api/user',userRouter)
app.use('/api/product',productRounter)
app.use('/api/cart',cartRounter)
app.use('/api/order',orderRouter)

app.get('/',(req,res)=>{
    res.send("server started")
})

app.listen(port,()=> console.log('server started op PORT :'+ port))








// import express from 'express'

// // const express = require ("express");
// const port = 4000;
// // const mongodb = require('./config/mongodb');
// // import 'dotenv/config'

// const app = express();


// app.use(express.urlencoded());
// // app.set("view engine","ejs");


// app.get ("/",(req, res) =>{
//     res.send("server started");
// });





// app.listen(port,(err)=>{
//     err ? console.log(err) : console.log("server started in port" + port);
// });