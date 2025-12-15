import { Router } from "express";
import { createPost , deletePost , updatePost , getAllPosts , getPostById } from "../controller/postcontroleer.js";

const postRoutes = Router();

postRoutes.post('/create', createPost) ; 
postRoutes.get('/:id', getPostById); 
postRoutes.post('/update/:id' , updatePost) ; 
postRoutes.get('/getAll', getAllPosts)
postRoutes.delete('/delete/:id', deletePost)

export default postRoutes ;

