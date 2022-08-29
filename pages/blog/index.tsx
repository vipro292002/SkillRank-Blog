import Head from 'next/head'
import React from 'react'
import { ArrowDownRightIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { NextPageWithLayout } from '../page'
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout'
import Link from 'next/link'
import { ICategory } from '../../lib/types/Category'
import PostCart from '../../components/cards/post/PostCard'
import MetaHeader from '../../components/meta'

import { allResources } from "contentlayer/generated"
import { pick } from '../../utils/pick'



type Props = {
 resources: any
}

const BlogPage: NextPageWithLayout = ({ resources }: any) => {
    console.log("resources",resources);
    
    const categories = [
        { id: 1, name: "ReactJS" },
        { id: 2, name: "NextJS" },
        { id: 3, name: "SQL" },
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
                                            <ArrowDownRightIcon className='hidden group-hover:inline ml-2 w-5 h-5 ' />
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-12 max-w-lg mx-auto grid gap-5 md:grid-cols-2 md:max-w-none lg:grid-cols-3 lg:max-w-none">
                                {resources.map((post: any, index: any) => (
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

export function getStaticProps() {
    
    const resources: any = allResources
      .map((resource: any) =>
        pick(resource, [
          'slug',
          'title',
          'description',
          'publishedAt',
          'readingTime',
          'author',
          'category',
          'image',
          "tags"
        ])
      )
      .sort(
        (a: any, b: any) =>
          Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
      );
  
    return { props: { resources } };
  }