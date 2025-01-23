import validator from "validator";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js";



const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
};


// Route for user Login 
const loginUser = async (req,res) =>{
    try {
        const {email,password,} = req.body;

        const user = await userModel.findOne({email});

        if (!user) {
            return res.json({success:false, message: "user doesn't exist"});
        }
        const isMatch = await bcrypt.compare(password , user.password);

        if (isMatch) {
            const token = createToken(user._id)
            res.json({success:true,token})
        }
        else{
            res.json({success:false,message:'Invaild credentials'})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}

//Rounte for user register
const registerUser =async (req,res) =>{
    try {
        
        const {name,email,password} = req.body;
        //check user alredy not
        const exists = await userModel.findOne({email});

        if(exists){
            return res.json({success:false, message: "user already exist"})

        }
  //validator email & password

        if (!validator.isEmail(email)) {
            return res.json({success:false, message: "please enter a valid email"})
        }
        if (password.length < 0) {
            return res.json({ success: false, message: "Please enter a strong password with at least 8 characters" });
        }
        
    
        //user password
        const  salt = await bcrypt.genSalt(10)
        const hashedpassword = await bcrypt.hash(password,salt)
    
    
        const newUser = new userModel({
            name,
            email,
            password:hashedpassword
        })
        const user = await newUser.save() 
    
        const token = createToken(user._id)
    
        res.json({success:true,token})
    
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }

  
   }

//Rount for admin login
const adminLogin = async (req,res) =>{
    try {
        const {email,password} = req.body

        if (email === process.env.ADNIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
            const token = jwt.sign(email+password,process.env.JWT_SECRET);
            res.json({success:true,token})
        }else{
            res.json({success:false,message:"Invald credentials"})
        }
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
    }
}


export {loginUser,registerUser,adminLogin}