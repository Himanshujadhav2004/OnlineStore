const express = require("express");
const connectDb =require("./db/db");

require("dotenv").config();
const userRouter =require("./routers/User")


const app =express();

//connection of the database

connectDb();

//middleware
//converts the json data into the javascript object
app.use(express.json());

//users Router
app.use("/user/api",userRouter);

app.get("/",(req,res)=>{
   return  res.send("Hi Himanshu");
})

//starting the backend
try{
app.listen(process.env.PORT);
console.log("backend is started on the 8080")
}
catch(err){
    console.log(err);
}
