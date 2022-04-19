const express = require('express');
const mongoose = require('mongoose');
const app = express()
app.use(express.json())


const connect = ()=>{
    return mongoose.connect("mongodb+srv://rbjuly31:actyv.ai@cluster0.zhanp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}

const userSchema = new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    gender:{type:String,default:"male"},
    profession:{type:String,default:"student"}

}) 

app.get("/",async (req,res)=>{
    const data = await User.find().lean().exec()
    console.log(data)
    res.send(data)
})

app.post("/",async (req,res)=>{
    const data = await User.create(req.body)
    console.log(data)
    res.send(data)
})
const User = mongoose.model("User",userSchema)

app.listen(1234,()=>{
    connect()
    console.log("Db connected")
})