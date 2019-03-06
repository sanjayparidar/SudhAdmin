var express=require("express");
var app=express();

app.get("/",function(req,res){
    res.sendFile(__dirname+"/dist/SudhAdmin/index.html")
});

app.listen(2000,function(){
    console.log("server")
});