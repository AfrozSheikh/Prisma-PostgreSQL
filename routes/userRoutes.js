import { Router } from "express";
import { createUser } from "../controller/usercontroller.js";

const userRoutes = Router();

userRoutes.post('/createUser', createUser) ; 

export default userRoutes ;

