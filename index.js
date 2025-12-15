import express from "express"
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
const app = express() ; 

const port = 4000 ; 

app.get("/", (req,res)=>{
res.send("<p> hii</p> ")
})

app.use(express.json() )
app.use('/user', userRoutes) ;
app.use('/post', postRoutes) ;


app.listen(port , ()=>{
    console.log("listening on port " + port) ;
    
})