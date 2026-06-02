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

exports.login = async(req,res)=>{

    try{
   const {email,password}=req.body;

   const user =await UserShecma.findOne({email});

   if(!user){
    return res.status(401).json({message:"User not exist please register first"});
   }

   const hashedpass =user.password;

   const pass = await bcrypt.compare(password,hashedpass);

   if(!pass){
    return res.status(401).json({message:"Password was incorrect"});
   }

const token =jwt.sign({email:user.email,name:user.name,phoneNO:user.PhoneNO,userType:user.userType},process.env.JWT_SECRET,{expiresIn:"1h"});
return res.status(201).json({message:"user Login Successfully",token:token});
    }
    catch(err)
{
    console.log(err);
}

}