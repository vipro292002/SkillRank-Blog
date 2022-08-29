import Head from 'next/head'
import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { NextPageWithLayout } from '../../page'
import PrimaryLayout from '../../../components/layouts/primary/PrimaryLayout'
import Link from 'next/link'
import { ICategory } from '../../../lib/types/Category'
import PostCart from '../../../components/cards/post/PostCard'
import MetaHeader from '../../../components/meta'
import Pagination from '../../../components/pagination/Pagination'
import { useRouter } from 'next/router'

type Props = {}

const CategoryPostPage: NextPageWithLayout = (props: Props) => {
    const categories = [
        { id: 1, name: "ReactJS" ,slug:"reactjs"},
        

    ]

    const posts = [
        {
            id: 1,
            title: 'Improve your customer experience',
            slug: 'improve your customer experience',
            category: { id:1, name: 'ReactJS',slug:"reactjs" },
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
            publishedAt: '2020-02-12',
            image:
                'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            readingTime: {
                text: "2 minute",
                minutes: 2,
                time: 977,
                words: 677
            },
            author: {
                id:1,
                name: 'Daniela Metz',
                slug: "aniela-metz",
                image:
                    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            tags: [
                { id: 1, name: "ReactJS",slug:"reactjs" },
                { id: 2, name: "SQL",slug:"sql" },
                { id: 3, name: "NextJS",slug:"nextjs" },
            ]
        },
        {
            id: 1,
            title: 'Improve your customer experience',
            slug: 'improve your customer experience',
            category: { id:1, name: 'ReactJS',slug:"reactjs" },
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
            publishedAt: '2020-02-12',
            image:
                'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            readingTime: {
                text: "2 minute",
                minutes: 2,
                time: 977,
                words: 677
            },
            author: {
                id:1,
                name: 'Daniela Metz',
                slug: "aniela-metz",
                image:
                    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            tags: [
                { id: 1, name: "ReactJS",slug:"reactjs" },
                { id: 2, name: "SQL",slug:"sql" },
                { id: 3, name: "NextJS",slug:"nextjs" },
            ]
        },
        {
            id: 1,
            title: 'Improve your customer experience',
            slug: 'improve your customer experience',
            category: { id:1, name: 'ReactJS',slug:"reactjs" },
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
            publishedAt: '2020-02-12',
            image:
                'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            readingTime: {
                text: "2 minute",
                minutes: 2,
                time: 977,
                words: 677
            },
            author: {
                id:1,
                name: 'Daniela Metz',
                slug: "aniela-metz",
                image:
                    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            tags: [
                { id: 1, name: "ReactJS",slug:"reactjs" },
                { id: 2, name: "SQL",slug:"sql" },
                { id: 3, name: "NextJS",slug:"nextjs" },
            ]
        },
        {
            id: 1,
            title: 'Improve your customer experience',
            slug: 'improve your customer experience',
            category: { id:1, name: 'ReactJS',slug:"reactjs" },
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
            publishedAt: '2020-02-12',
            image:
                'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            readingTime: {
                text: "2 minute",
                minutes: 2,
                time: 977,
                words: 677
            },
            author: {
                id:1,
                name: 'Daniela Metz',
                slug: "aniela-metz",
                image:
                    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            tags: [
                { id: 1, name: "ReactJS",slug:"reactjs" },
                { id: 2, name: "SQL",slug:"sql" },
                { id: 3, name: "NextJS",slug:"nextjs" },
            ]
        },

       
    ]
    const router = useRouter()
    const { id } = router.query
    const current = router.query.page? Number(router.query.page) : 1 
    console.log("id",id);
    

    return (
        <div>
            <MetaHeader title="Lastest Blog" />

            <div>

                <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                    <div className="absolute inset-0 bg-white">
                        <div className="bg-white h-1/3 sm:h-2/3" />
                    </div>

                    {categories.map((item: ICategory, index) => {
                        return <div key={index + 1} className="relative max-w-7xl mb-16 mx-auto">
                            <div className="flex justify-between items-end   text-center sm:text-center md:text-left ">
                                <div className='basic-3/4'>
                                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">{item.name}</h2>
                                    {/* <p className="mt-3 max-w-2xl  text-xl text-gray-500 sm:mt-4">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
                                </p> */}

                                </div >
                                <div className='basic-1/4'>
                                    <Link href={`/blog/category/${item.id}`}>
                                        <a className='group float-right text-lg font-bold hover:text-primary-300 ' >
                                            Read More
                                            <ArrowRightIcon className='hidden group-hover:inline ml-2 w-5 h-5 ' />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-12 max-w-lg mx-auto grid gap-5 md:grid-cols-2 md:max-w-none lg:grid-cols-3 lg:max-w-none">
                                {posts.map((post, index) => (
                                    <PostCart key={index + 1} {...post} />
                                ))}
                            </div>
                        </div>
                    })}

                    <Pagination
                        current={current}
                        maximum={10}
                        resolveLink={(page) =>
                            `/blog/category/${id}?page=${page}`
                        }
                    />

                </div>




            </div>


        </div>
    )
}

export default CategoryPostPage

CategoryPostPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};