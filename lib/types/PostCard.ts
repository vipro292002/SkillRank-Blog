export interface IPostCard {

    title: string,
    href: string,
    category: { name: string, href: string  },
    description: string,
    date: string,
    datetime: string,
    imageUrl: string,
    readingTime: string,
    author: {
        name: string,
        href: string,
        imageUrl: string,
    },
    tags: { id: number, name: string }[]

}