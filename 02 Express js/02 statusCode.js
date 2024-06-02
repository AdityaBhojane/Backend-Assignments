
const express = require("express")

const app = express();

app.get('/',(req,res)=>{
    // random route then 404
    res.end('hello')
})

app.get('/sum',(req,res)=>{
    // 411
    const n = parseInt(req.query.num)
    const sum = () => n + 10;
    res.end("sum is " + sum())
})

app.get('/error',(req,res)=>{
    throw new Error("Explicit error") 
    // 500
})

app.listen(3000,()=>{
    console.log("server is running")
})