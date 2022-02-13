const mongoose=require("mongoose");
const connect=()=>{
    return mongoose.connect("mongodb+srv://aditya:123aditya@cluster0.skdge.mongodb.net/portfolio?retryWrites=true&w=majority");
}

module.exports=connect;

