const app=require("./index");
const connect=require("./config");

app.listen(2345,async()=>{
    try{
        await connect();
        console.log("listining on port 2345");
    }
    catch(err){
        console.log("err connect mongo: ",err);
    }
})