const fs = require('fs')

fs.readFile('./files/newFile.css','utf8',(e)=>{
    console.error(e)
})

