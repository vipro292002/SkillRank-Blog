import prisma from "./prisma"


export const listCategory = async (req,res)=>{
    try {
        const category = await prisma.category.findMany({
            include: { posts: true, tags: true }
        })
        res.json(category)
      
    } catch (error) {
        res.status(400).json({ message: "Khong tim thay data" })
    }
}

export const detailCategory = async (req,res)=>{
    try {
        const category = await prisma.category.findUnique({
            where:{
                id: req.params.slug
            },
            include: { posts: true, tags: true }
        })
        res.json(category)
      
    } catch (error) {
        res.status(400).json({ message: "Khong tim thay data" })
    }
}

