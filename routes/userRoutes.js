import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserByid, updateUser } from "../controller/usercontroller.js";

const userRoutes = Router();

userRoutes.post('/create', createUser) ; 
userRoutes.get('/:id', getUserByid); 
userRoutes.post('/update/:id' , updateUser) ; 
userRoutes.get('/getallusers', getAllUsers)
userRoutes.delete('/delete/:id', deleteUser)

export default userRoutes ;

