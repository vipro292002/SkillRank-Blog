import prisma from "./prisma"

export const listPost = async (req,res)=>{
    try {
        const posts = await prisma.post.findMany({
            include: { category: true, tags: true }
        })
        res.json(posts)
      
    } catch (error) {
        res.status(400).json({ message: "Khong tim thay data" })
    }
}

export const detailPost = async (req,res)=>{
    try {
        const post = await prisma.post.findUnique({
            where:{
                id: req.params.slug
            },
            include: { category: true, tags: true }
        })
        res.json(post)
      
    } catch (error) {
        res.status(400).json({ message: "Khong tim thay data" })
    }
}

export const editPost = async (req,res)=>{
    try {
        const post = await prisma.post.update({
            where:{
                id: req.params.id
            },
            data: req.body
        })
        res.json(post)
      
    } catch (error) {
        res.status(400).json({ message: "Khong tim thay data" })
    }
}