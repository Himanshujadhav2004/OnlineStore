const express = require("express");
const connectDb =require("./db/db");

require("dotenv").config();
const userRouter =require("./routers/User")
const cors =require("cors");


const app =express();

//connection of the database

connectDb();

//middleware
//converts the json data into the javascript object
app.use(express.json());
app.use(cors());

//users Router
app.use("/user/api",userRouter);

app.get("/",(req,res)=>{
   return  res.send("Home Api");
})

//starting the backend
try{
app.listen(process.env.PORT);
console.log("backend is started on the 8080")
}
catch(err){
    console.log(err);
}
