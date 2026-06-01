const express = require("express");
const connectDb =require("./db/db");


const app =express();

//connection of the database

connectDb();

app.get('/',(req,res)=>{
    res.send("Hi Himanshu");
})

try{
app.listen(8080);
console.log("backend is started on the 8080")
}
catch(err){
    console.log(err);
}
