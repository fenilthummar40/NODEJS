// const mongoose = require("mongoose");
// mongoose.connect("mongodb://127.0.0.1/CRUD");

// const db = mongoose.connection;

// db.once("open",(err)=>{
//     err ? console.log(err) : console.log("Succesfully");
// });

// module.exports = db;


import mongoose from "mongoose";

const connectDB = mongoose.connect("mongodb+srv://fenilthummar22:fenil123@cluster0.sb2kq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB connected");
})
.catch((err)=>{
    console.log(err);
})



export default connectDB