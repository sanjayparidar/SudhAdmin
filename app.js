var express=require("express");
var app=express();
var path=require("path");
app.use(express.static(__dirname +"/dist/SudhAdmin"));

app.get("/*",function(req,res){
    console.log("hello")
   var path=(__dirname+"/dist/SudhAdmin/index.html")
   console.log(path,"+++++++++++++++++++++")
    res.sendFile(__dirname+"/dist/SudhAdmin/index.html");
});
app.listen(process.env.PORT || 3000,function(){
    console.log("server")
});


