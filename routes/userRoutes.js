import { Router } from "express";
import { createUser, deleteUser, getAllUsers, getUserByid, updateUser } from "../controller/usercontroller.js";

const userRoutes = Router();

userRoutes.post('/createUser', createUser) ; 
userRoutes.get('/:id', getUserByid); 
userRoutes.post('/update' , updateUser) ; 
userRoutes.get('/getallusers', getAllUsers)
userRoutes.delete('/delete', deleteUser)

export default userRoutes ;

