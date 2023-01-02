var express=require('express')
var app=express();
var path=require("path");
var fs=require("fs");

app.use(express.static(path.join(__dirname,"public")));
app.get('/',function(req,resp){
resp.sendFile(path.join (__dirname,"/index.html"));
})

app.get('/hello',function(req,resp){
   var person ={firstName:"Supriya",LastName:"Sonawane"};
    resp.send(person);
})
var server=app.listen(8000,function(){
    var host=server.address().host;
    var port=server.address().port;
    console.log ("server listening at port 8000")
})