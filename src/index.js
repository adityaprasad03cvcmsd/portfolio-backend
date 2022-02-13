const express=require("express");
const app=express();

const ConnectMeController=require("./controllers/portfollioController");

app.use(express.json());
app.use("/",ConnectMeController);

module.exports=app;