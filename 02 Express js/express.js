import express from "express";

let app = express()
const port = "3000"

app.get("/",(req,res)=>{
    res.end("hello there this is express")
})

app.listen(port,()=>{
    console.log('running port')
})