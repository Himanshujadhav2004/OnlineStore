const mongoose=require("mongoose");

const  userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{

        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    phoneNO:{
        type:Number,
        required:true,
        unique:true
    },
    userType:{
        type:String,
        enum:["admin","customer"],
        default:"customer"
    }
},{
    timestamps:true
});

const User =mongoose.model("user",userSchema);

module.exports=User;