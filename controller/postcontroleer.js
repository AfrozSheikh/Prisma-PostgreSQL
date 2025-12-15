import prisma from "../DB/db.config.js";

export const createPost= async(req,res)=>{
    const {user_id , title , description}= req.body; 
     const newPost = await prisma.post.create({
        data:{
            user_id,
            title,
            description
        }
     });

        res.json({
            message: "Post created successfully",
            post: newPost
        })

}
export const getAllPosts= async(req,res)=>{ 
    const posts = await prisma.post.findMany();
    res.json({
        message: "All posts retrieved successfully",
        posts: posts
    });
}

export const getPostById= async(req,res)=>{ 
    const {id} = req.params;
    const post = await prisma.post.findUnique({
        where:{
            id: parseInt(id)
        }
    });
    res.json({
        message: "Post retrieved successfully",
        post: post
    });
}

export const updatePost= async(req,res)=>{
    const {id} = req.params;
    const {title , description} = req.body;
    const updatedPost = await prisma.post.update({
        where:{
            id: parseInt(id)
        },
        data:{
            title,
            description
        }
    });
    res.json({
        message: "Post updated successfully",
        post: updatedPost
    });
}

export const deletePost= async(req,res)=>{
    const {id} = req.params;
    await prisma.post.delete({
        where:{
            id: parseInt(id)
        }
    });
    res.json({
        message: "Post deleted successfully"
    });
}






