let express = require('express');

let app = express();

app.use(express.json())

app.get('/',(req,res)=>{
    // this is a bad way to do checks
    let username = req.body.username
    let password = req.body.password
    if(!(username == "aditya7" && password == "1234")){
        res.status(404).send("not found");
        return; // to avoid else statement
    }
    res.end("welcome to system")
})

app.get('/user/:id',(req,res)=>{
    let id = parseInt(req.params.id)
    idCheck(id,res)
})

// middleware fnc
function idCheck(id,res){
    if(id == 150 || id == 151){
        res.status(200).send("success")
    }else{
        res.status(401).send('something is wrong')
    }
}

app.listen(3100)