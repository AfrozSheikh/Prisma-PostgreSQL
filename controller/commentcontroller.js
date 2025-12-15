import prisma from "../DB/db.config.js";

export const createComment= async(req,res)=>{
    const {user_id , post_id , comment}= req.body; 
     const newCom = await prisma.comment.create({
        data:{
            user_id,
            post_id,
            comment
        }
     });

        res.json({
            message: "Comment created successfully",
            newCom: newCom
        })

}
// export const getAllPosts= async(req,res)=>{ 
//     const posts = await prisma.comment.findMany();
//     res.json({
//         message: "All posts retrieved successfully",
//         posts: posts
//     });
// }

export const getCommById= async(req,res)=>{ 
    const {id} = req.params;
    const com = await prisma.comment.findUnique({
        where:{
            id: parseInt(id)
        }
    });
    res.json({
        message: "Post retrieved successfully",
        com: com
    });
}

export const updateCom= async(req,res)=>{
    const {id} = req.params;
    const {comment} = req.body;
    const updatedcomment = await prisma.comment.update({
        where:{
            id: parseInt(id)
        },
        data:{
           comment
        }
    });
    res.json({
        message: "comment updated successfully",
        com: updatedcomment
    });
}

export const deleteComm= async(req,res)=>{
    const {id} = req.params;
    await prisma.comment.delete({
        where:{
            id: parseInt(id)
        }
    });
    res.json({
        message: "comment deleted successfully"
    });
}






