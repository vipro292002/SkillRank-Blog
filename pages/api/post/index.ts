import instance from "../instance"


export const listPost = ()=>{
    const url = `/posts`
    return instance.get(url)
}

export const detailPost = (id: string)=>{
    const url = `/posts${id}`
    return instance.get(url)
}

export const editPost = (data: any)=>{
    const url = `/posts/${data.id}`
    return instance.put(url,data)
}