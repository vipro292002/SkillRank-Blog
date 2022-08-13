import Head from 'next/head'
import React from 'react'
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { NextPageWithLayout } from '../../page'
import PrimaryLayout from '../../../components/layouts/primary/PrimaryLayout'
import Link from 'next/link'
import { ICategory } from '../../../lib/types/Category'
import PostCart from '../../../components/cards/post/PostCard'
import MetaHeader from '../../../components/meta'
import Pagination from '../../../components/pagination/Pagination'
import { useRouter } from 'next/router'

type Props = {}

const LastestPostPage: NextPageWithLayout = (props: Props) => {
    const categories = [
        { id: 1, name: "ReactJS" },

    ]

    const posts = [
        {
            title: 'Boost your conversion rate',
            href: '#',
            category: { name: 'Article', href: '#' },
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
            imageUrl:
                'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            readingTime: '6 min',
            author: {
                name: 'Roel Aufderehar',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            tags: [
                { id: 1, name: "React" },
                { id: 2, name: "SQL" },
                { id: 3, name: "NextJS" },
            ]
        },
        {
            title: 'How to use search engine optimization to drive sales',
            href: '#',
            category: { name: 'Video', href: '#' },
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium. ',
            date: 'Mar 10, 2020',
            datetime: '2020-03-10',
            imageUrl:
                'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            readingTime: '4 min',
            author: {
                name: 'Brenna Goyette',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            tags: [
                { id: 1, name: "React" },
                { id: 2, name: "SQL" },
                { id: 3, name: "NextJS" },
            ]
        },
        {
            title: 'Improve your customer experience',
            href: '#',
            category: { name: 'Case Study', href: '#' },
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
            date: 'Feb 12, 2020',
            datetime: '2020-02-12',
            imageUrl:
                'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            readingTime: '11 min',
            author: {
                name: 'Daniela Metz',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            tags: [
                { id: 1, name: "React" },
                { id: 2, name: "SQL" },
                { id: 3, name: "NextJS" },
            ]
        },
        {
            title: 'Improve your customer experience',
            href: '#',
            category: { name: 'Case Study', href: '#' },
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
            date: 'Feb 12, 2020',
            datetime: '2020-02-12',
            imageUrl:
                'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            readingTime: '11 min',
            author: {
                name: 'Daniela Metz',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            tags: [
                { id: 1, name: "React" },
                { id: 2, name: "SQL" },
                { id: 3, name: "NextJS" },
            ]
        },
        {
            title: 'Improve your customer experience',
            href: '#',
            category: { name: 'Case Study', href: '#' },
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
            date: 'Feb 12, 2020',
            datetime: '2020-02-12',
            imageUrl:
                'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
            readingTime: '11 min',
            author: {
                name: 'Daniela Metz',
                href: '#',
                imageUrl:
                    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
            },
            tags: [
                { id: 1, name: "React" },
                { id: 2, name: "SQL" },
                { id: 3, name: "NextJS" },
            ]
        },
    ]

    const tags = [
        { id: 1, name: "ReactJS" },
        { id: 2, name: "NodeJS" },
        { id: 3, name: "NextJS" },
        { id: 4, name: "ReactJS" },
        { id: 5, name: "NodeJS" },
        
    ]

    const router = useRouter()
    const current = router.query.page ? Number(router.query.page) : 1


    return (
        <div>
            <MetaHeader title="Lastest Blog" />

            <div>

                <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                    <div className="absolute inset-0 bg-white">
                        <div className="bg-white h-1/3 sm:h-2/3" />
                    </div>

                    <div className="flex gap-12 relative max-w-7xl mb-16 mx-auto">
                        <div className="basic-3/4">
                            <div className="   text-start sm:text-center md:text-left ">
                                <div className=''>
                                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Recently Published</h2>
                                    

                                </div >

                            </div>
                            <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
                                {posts.map((post, index) => (
                                    <PostCart key={index + 1} {...post} />
                                ))}

                            </div>
                        </div>
                        <div className="basic-1/4 w-full">
                            <div className="">
                                <h1 className='mt-4 text-2xl font-bold  ' >
                                    Tags
                                </h1>
                                <div className="mt-4  ">
                                    {tags.map((item: { id: number, name: string }, index: number) => {
                                        return <div
                                            key={index + 1}
                                            className=" relative  inline-block mr-2 mb-2 hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out text-xs  font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-primary-100 rounded-full"
                                        >

                                            <Link href={`/blog/category/tag?${item.id}`} >
                                                <a className='hover:text-primary-300  '>
                                                    {item.name}
                                                </a>
                                            </Link>
                                        </div>
                                    })}

                                </div>
                                <div className="mt-4">
                                    <h1 className='mt-4 text-2xl font-bold  ' >
                                        Popular Post
                                    </h1>
                                    {posts.map((item: any, index) => {
                                        return <div key={index + 1} className="flex mt-2 group hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out ">
                                            <div className="basic-1/4">
                                                <ChevronRightIcon className='h-6 w-6 group-hover:text-primary-100' />
                                            </div>
                                            <div className="basic-3/4">
                                                <Link href={`/blog/post/${item.id}`}>
                                                    <a href="" className='group-hover:text-primary-100'>
                                                        {item.title}
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Pagination
                        current={current}
                        maximum={10}
                        resolveLink={(page) =>
                            `/blog/lastest?page=${page}`
                        }
                    />

                </div>




            </div>


        </div>
    )
}

export default LastestPostPage

LastestPostPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};