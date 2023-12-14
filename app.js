const fs = require('fs');

const express = require('express');
const app = express();


fs.readFile('./data.json','utf8',(err,data)=>{
   if(!err){
    app.get('/',(req,res)=>{
        res.send(data)
    })
   }else{
    console.log(err);
   }
})


app.listen(3000,()=>{
    console.log("Server çalışdı");
})
