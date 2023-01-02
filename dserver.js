const express=require('express');
const app=express();

app.get('/',(req,resp)=>{
    resp.sendFile('index.html',{root:__dirname});
});

app.listen(8000,()=>{
    console.log("server running at 8000");
});