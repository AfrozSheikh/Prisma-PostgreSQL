import prisma from "../DB/db.config.js";

export const createUser = async (req,res) =>{
        const{name , email , password} = req.body ;
        const isExist = await prisma.user.findUnique({
                where : {
                email:email
        }})
        if(isExist) res.json({
                message : "user already exist "
        })
        
        
        const newUser = await prisma.user.create({
                data : {
                        name ,
                        email ,
                        password
                }
        })

        return res.status(201).json({
                message : "user created successfully " ,
                user : newUser
        })



}

export const getAllUsers = async (req,res) =>{
        const users = await prisma.user.findMany() ;
        return res.status(200).json({
                message : "all users fetched successfully " ,
                users : users
        })
}

export const updateUser = async (req,res) =>{
        const {id} = req.params ;
        const {name , email , password} = req.body ;

        const updatedUser = await prisma.user.update({
                where : {
                        id : parseInt(id)
                },
                data : {
                        name ,
                        email ,
                        password
                }
        })

        return res.status(200).json({
                message : "user updated successfully " ,
                user : updatedUser
        })
}