import express from "express"
const app = express() ; 

const port = 4000 ; 

app.get("/", (req,res)=>{
res.send("<p> hii</p> ")
})

app.listen(port , ()=>{
    console.log("listening on port " + port) ;
    
})