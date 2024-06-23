
const express = require("express")

const app = express();

app.get('/',(req,res)=>{
    // random route then 404
    res.end('hello')
})

app.get('/num',(req,res)=>{
    // 411
    // if user give wrong input
    const n = parseInt(req.query.n)
    const sum = () => n + 10;
    res.end("sum is " + sum())
    // http://localhost:3000/?n=123
    // above get handler overwrite this so use '/num' route
})

app.get('/error',(req,res)=>{
    throw new Error("Explicit error") 
    // 500
})

app.listen(3000,()=>{
    console.log("server is running")
})