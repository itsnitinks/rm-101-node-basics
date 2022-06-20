// install and import express
let fs=require("fs")
let filename="./assets/user.json"
let file=require(filename)

const express = require("express")
let app = express();

// Code here
app.use(express.json())

// Note: Do not remove this export statement

app.get("/",async(req,res)=>{
    try{
            fs.readFile(__dirname+ "/assests/users.html","utf8",function(error,data){
                if(error){
                    return res.send(error)
                }
                return res.send(data)
            })
    }
    catch(err){
        return res.send(err)
    }
})

app.get("/users",async(req,res)=>{
    try{
            fs.readFile(__dirname+ "/assests/users.json",function(error,data){
                if(error){
                    return res.send(error)
                }
                return res.send(data)
            })
    }
    catch(err){
        return res.send(err)
    }
})



app.listen(8000,async()=>{
    try{
        console.log("listening on port 8000 ,hi server")
    }catch(err){
        console.log("error is",err)
    }
})
module.exports = app;
