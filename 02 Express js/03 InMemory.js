const express = require('express')

const app = express()

// in memory data
const user = [{
    name:"john",
    blood:[{
        pure:false
    }]
}]


// best to way to take input in GET method is query parameter
app.get('/',(req,res)=>{
    // array of blood packs
    const johnBlood = user[0].blood;
    // length of that array
    const totalBloodPack = johnBlood.length;
    // dummy variable
    let pureBlood = 0;
    // filtering pureBlood and increment
    for(let i=0; i<johnBlood.length; i++){
        if(johnBlood[i].pure){
            ++pureBlood
        }
    }
    // calculate impureBlood
    const impureBlood = totalBloodPack - pureBlood
    // respond all data in JSON
    res.json({
        johnBlood,
        totalBloodPack,
        pureBlood,
        impureBlood
    })
})


// middlewares
app.use(express.json())

// In POST method mostly we use body
app.post('/',(req,res)=>{
    // this is not work without middleware
    const newBlood = req.body.newBlood;
    user[0].blood.push({
        pure:newBlood
    }) 
    res.end('success')
    console.log(user[0].blood)
})
// using postman we can send in body section
// JSON format { newBlood:true }


// making all blood pack pure
app.put('/',(req,res)=>{
    for (let i = 0; i < user[0].blood.length; i++) {
        user[0].blood[i].pure = true        
    }
    res.end('done')
})



// removing impure blood packs
app.delete('/',(req,res)=>{
    if(checkImpure()){
        const PurePacks = [];
        for (let i = 0; i < user[0].blood.length; i++) {
            if(user[0].blood[i].pure){
                PurePacks.push(user[0].blood[i])
            }
        }
        user[0].blood = PurePacks;
        // console.log(PurePacks)
        res.end("impure deleted")
    }else{
        res.status(411).json({
            msg:"impure blood does not present"
        })
    }
})

/**
 * NOTE - for more optimization if there is impure blood so in that case 
 * PUT or DELETE req doest make sense so what we can do ...
 * we can check if there impure blood present or not else we can return status code 401 or 411
*/
function checkImpure(){
    let includeImpureBlood = false;
    for (let i = 0; i < user[0].blood.length; i++) {
        if(!user[0].blood[i].pure){
            includeImpureBlood = true
        }
    }
    return includeImpureBlood
}



app.listen(3000,()=>{
    console.log("server is running now")
})