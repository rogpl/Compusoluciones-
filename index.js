const express=require('express');
const app=express();
app.get('/', (req, res)=>{
    console.log("Here");
    res.json({message: "error"});
})
app.listen(3000);
