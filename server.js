const express = require("express");
const app = express();

app.get("/",function(req,res){
    res.send("Hello");
    
})

app.get("/contact",function(req,res){
    res.send("Contact me at rahulgmail.com");
    
})

app.get("/about",function(req,res){
    res.send("Hi i am rahul roy")
})

app.get("/hello",function(req,res){
    res.send("Hello Gandu")
})

app.listen(3000 , function(){
    console.log("Server started at port 3000");
});