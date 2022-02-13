const mongoose=require("mongoose");

const connectMeSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String, required:true},
    subject:{type:String, required:false},
    message:{type:String, required:false}
},{
    versionKey:false,
    timestamps:true
});

const ConnectMe= mongoose.model("connecme",connectMeSchema);

module.exports=ConnectMe;

