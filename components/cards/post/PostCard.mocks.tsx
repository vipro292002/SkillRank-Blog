import { IPostCard } from "../../../lib/types/PostCard";


const base: IPostCard = {

    title: "Aurum perdideris incidit arbor et in pridem",
    publishedAt: '2022-03-12',
    description: "Sunt et ut cur Eryx etiamnunc. Duo ore crinita petis vulneribus opus Ophionides est umbra nobilis radicibus ferrugine virentem nec. .",
    category: {id:1, slug: "react-js",name: 'ReactJS'},
    author: {id:1, name: 'Hunter Becton', slug:"hunter-becton", image: 'https://images.unsplash.com/photo-1628329336337-8c33a8f08ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80' },
    tags: [
        { id: 1, slug:" react-js", name: "React" },
        { id: 2, slug: "sql", name: "SQL" },
        { id: 3, slug: "next-js", name: "NextJS" },
    ],
    readingTime:{
        text: "6 min",
        minutes: 3,
        time: 4,
        words: 16
    },
    image: 'https://images.unsplash.com/photo-1628329336337-8c33a8f08ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'
    
}

export const mockPostCardProps = {
    base,
}