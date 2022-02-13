const express=require("express");
const router=express.Router();

const ConnectMe=require("../models/portfolio");

router.get("",async(req,res)=>{
    try{
        const connectMe=await ConnectMe.find().lean().exec();
        return res.status(200).send(connectMe);
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
});

router.post("",async(req,res)=>{
    try{
        let connectMe=await ConnectMe.create(req.body)
        return res.status(201).send(connectMe);
    }
    catch(err){
        return res.status(500).send({message:err.message});
    }
})
module.exports=router;
