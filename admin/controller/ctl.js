const AdminSchema = require("../module/firstschema");
const fs = require("fs");
const miler = require("../middleware/mail");

module.exports.Login = (req,res) => {
    res.render("Login");
}

module.exports.userLogin = async (req, res) =>{
    console.log(req.body);
    
    let admin = await AdminSchema.findOne({email: req.body.email});
    console.log(admin);
    req.flash( "success" , "Log in Sucessfull")
    res.redirect("/Dashboard");
    
    // if(admin){
    //    if(admin.password == req.body.password){
    //     res.cookie("adminData",admin);
    //     res.redirect("/dashboard");
    //    }else{
    //     console.log("password is wrong");
    //    }
    // }else{
    //     console.log("email not existed");
    // }
};

module.exports.Logout = (req,res)=>{
    req.session.destroy();
    res.clearCookie("local");
    res.redirect("/");
}

module.exports.HomePage = async(req,res) =>{
    // let data = await AdminSchema.find({});
    res.render("Dashboard");

}

module.exports.Addadmin =async(req,res) => {
    res.render("addadmin");
    // if (req.cookies.adminData) {
    //     let data = await AdminSchema.find({})
    // data && res.render("addadmin")
    // }else{
    //     res.redirect("/");
    // }
}

module.exports.Viewadmin =async(req,res) => {
    let data = await AdminSchema.find({})
    data && res.render("viewadmin",{data});
}

module.exports.AddAdminData = async(req,res)=>{
    req.body.image = req.file.path;
    let data = await AdminSchema.create(req.body)
    data && res.redirect("addadmin")
}
module.exports.DeleteData = async(req,res)=>{
    let SingleData = await AdminSchema.findById(req.query.id)
    fs.unlinkSync(SingleData.image);
    let data = await AdminSchema.findByIdAndDelete(req.query.id)
    data && res.redirect("/viewAdmin");
}
module.exports.EditData = async(req,res)=>{
    let data = await AdminSchema.findById(req.query.id)
    data && res.render("enditform",{data})
}
module.exports.UpdateData = async(req,res)=>{
    let img = "";
    let SingleData = await AdminSchema.findById(req.body.id)
    req.file ? img = req.file.path : img = SingleData.image
    req.file && fs.unlinkSync(SingleData.image)
    req.body.image = img
    let data = await AdminSchema.findByIdAndUpdate(req.body.id,req.body)
    data && res.redirect("/viewAdmin");
}


module.exports.Profile = async(req,res) =>{
    res.render("profile");
}

module.exports.changepassword = async(req,res) =>{
    res.render("changepassword");
}
module.exports.checkPass = async(req,res) =>{
    res.render("checkPass");
}
module.exports.changepass = async (req, res) => {
    let user = req.user;

    if(req.body.oldpass == user.password){
        
        if(req.body.newpass != user.password){

            if(req.body.newpass == req.body.confrompass){
                await AdminSchema.findByIdAndUpdate(user.id,{
                    password: req.body.newpass,
                });
                res.redirect("/");
            }

        }
        else{
            console.log("new password and confrom password different");
        }

    }
    else{
        console.log("old password is err");
    }
}

module.exports.forgotPass = async (req ,res) =>{
    console.log(res.body);
    let admin =await AdminSchema.findOne({email:req.body.email});
    if (!admin) {
        return res.redirect("/")
    }
    let otp = Math.floor(Math.random() * 100000 + 900000);

    miler.sedOtp(req.body.email,otp);

    req.session.otp;
    req.session.adminData = admin;

    req.render("checkpass");
}

module.exports.checkPassword = async (req,res) =>{
    console.log(res.body);
    let otp = req.session.otp;
    let adminData = req.session.adminData;

    if (req.body.otp == otp) {
        if (req.body.newpass == req.body.confirmpass) {
            let change = await AdminSchema.findByIdAndUpdate(adminData._id,{
                password: req.body.newpass,
            });
            change && res.redirect("/")
        }else{
            console.log("password must be same");
            res.redirect("/checkpass")
        }
    }else{
        console.log("otp is wrong");
        res.redirect("/checkpass");
    }
}