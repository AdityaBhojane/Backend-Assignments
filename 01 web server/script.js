const http = require('http')
const port = 5000;
const host = '127.0.0.1';
const server = http.createServer((req,res)=>{
    res.end("hello")
})

server.listen(port,host,()=>{
    console.log("running")
})