import { Router } from "express";
import { createComment , getCommById , updateCom , deleteComm } from "../controller/commentcontroller.js";

const commentRoutes = Router();

commentRoutes.post('/create', createComment) ; 
commentRoutes.get('/:id', getCommById); 
commentRoutes.post('/update/:id' , updateCom) ; 
commentRoutes.delete('/delete/:id', deleteComm)

export default commentRoutes ;

