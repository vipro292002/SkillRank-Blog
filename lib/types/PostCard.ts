export interface IPostCard {

    title: string,
    slug: string,
    category: { id: number, slug: string, name: string  },
    description: string,
    publishedAt: string,
    image: string,
    readingTime: {
        text: string,
        minutes: number,
        time: number,
        words: number
    },
    author: {
        id: number,
        slug: string,
        name: string,
        image: string,
    },
    tags: { id: number, slug: string, name: string }[]

}