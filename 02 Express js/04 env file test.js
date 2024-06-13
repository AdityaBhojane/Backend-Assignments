const express = require('express')
// Load environment variables from .env file
require('dotenv').config();
const app = express()

const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.end('This server is running on the port' + port )
})  

app.listen(port,()=>{
    console.log('Running')
})