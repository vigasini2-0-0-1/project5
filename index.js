const express = require('express'),
    app = express()
app.use(express.static('public'));

app.get("/", (req,res)=>{
    res.sendFile(__dirname+"/index.html");



})
app.get("/signin",(req,res)=>{
    res.sendFile(__dirname+"/signin.html");
})

app.listen(3000,()=>{
    console.log("App started");
})
