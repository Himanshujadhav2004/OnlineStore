const moongose =require("mongoose");

async function connectDb(){
    try{
        await moongose.connect('mongodb://localhost:27017/');
        console.log("database Connected susscessfully")
        
    }
    catch(err){
        console.log(err);
    }
}

module.exports=connectDb;