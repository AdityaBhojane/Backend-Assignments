//  Server Creation and req.url method understanding 

const http = require('http')

const server = http.createServer((req,res)=>{
    console.log('URL' + req.url)
    res.end("server sent a response in node console")
})

server.listen(3000,()=>{
    console.log('server is running')
})

// when we type something on URL is give us current URL 
// also it request favicon also along with the request 
// that why there are two outputs


