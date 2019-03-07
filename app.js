var express=require("express");
var app=express();
var path=require("path");
app.use(express.static(__dirname + "dist/SudhAdmin"));
app.get("/*",function(req,res){
    res.sendFile(path.join(__dirname + "dist/SudhAdmin/index.html"));
});

app.listen(process.env.PORT || 3000,function(){
    console.log("server")
});