const jwt = require("jsonwebtoken");
const bcrypt =require("bcrypt");
const UserShecma = require("../model/User");

exports.createUser=async(req,res)=>{

    try{
const {email,name,phoneNO,userType,password} =req.body;

const exitsUser = await UserShecma.findOne({email});

const hashpassword = await bcrypt.hash(password,Number(process.env.SAND_ROUND));
if(exitsUser){
    return  res.status(400).json({message:"User Exists"});
}

const userdata = new UserShecma({
    email,
    password:hashpassword,
    name,
    phoneNO,
    userType
});

await userdata.save();

return res.status(201).json({message:"user Created Successsfully"});
    }
    catch(err){
        console.log(err);
    }
}