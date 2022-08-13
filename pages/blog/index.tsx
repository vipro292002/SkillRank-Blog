import Head from 'next/head'
import React from 'react'
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import { NextPageWithLayout } from '../page'
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout'
import Link from 'next/link'
import { ICategory } from '../../lib/types/Category'
import PostCart from '../../components/cards/post/PostCard'
import MetaHeader from '../../components/meta'


type Props = {}

const BlogPage: NextPageWithLayout = (props: Props) => {

    const categories = [
        { id: 1, name: "ReactJS" },
        { id: 2, name: "NextJS" },
        { id: 3, name: "SQL" },
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


    return (
        <div>
            <MetaHeader title="Blog" />

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
                                            <ArrowNarrowRightIcon className='hidden group-hover:inline ml-2 w-5 h-5 ' />
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

                    

                </div>




            </div>


        </div>
    )
}

export default BlogPage

BlogPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};