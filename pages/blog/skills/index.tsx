import Head from 'next/head'
import React, { useEffect, useState, useRef } from 'react'
import { ArrowDownLeftIcon, ChevronDoubleRightIcon, ChevronLeftIcon, ChevronRightIcon, AdjustmentsHorizontalIcon, AdjustmentsVerticalIcon } from '@heroicons/react/24/solid'


import { NextPageWithLayout } from '../../page'
import PrimaryLayout from '../../../components/layouts/primary/PrimaryLayout'
import Link from 'next/link'
import { ICategory } from '../../../lib/types/Category'
import PostCart from '../../../components/cards/post/PostCard'
import MetaHeader from '../../../components/meta'

import { allResources, allSkills, allSQLs, allPowerBIs, allDocuments } from "contentlayer/generated"
import { pick } from '../../../utils/pick'

import { motion, useAnimationControls, useInView } from 'framer-motion'
import { NextSeo } from 'next-seo'
import LazyLoad from 'react-lazyload';


type Props = {
  resources: any
}

const SkillPage: NextPageWithLayout = ({ posts }: any) => {
  console.log("posts", posts);

  const categories = [
    { id: 1, name: "ReactJS" },
    { id: 2, name: "NextJS" },
    { id: 3, name: "SQL" },
  ]
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [changeLayout, setChangeLayout] = useState<boolean>(false)
  const [showMore, setShowMore] = useState<any>(posts.map((item: any, index: any) => {
    return { key: index + 1, check: false }
  }))
  console.log("showMore", showMore);

  const controls = useAnimationControls()
  const controls2 = useAnimationControls()

  useEffect(() => {
    controls.set({
      opacity: 0,
    })
    controls.start(i => ({
      opacity: 1,
      transition: { delay: i * 0.1 },
    }))

  }, [changeLayout])

  return (
    <div>
      {/* <MetaHeader title="Blog" /> */}
      <NextSeo title={"Skills"} description={"SkillRank Lastest Post"} />

      <div>

        <div className="relative bg-gray-50 dark:bg-dark-100 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          {/* <div className="absolute inset-0 bg-white">
            <div className="bg-gray-50 dark:bg-dark-100 h-1/3 sm:h-2/3" />
          </div> */}

          <div className="relative max-w-7xl mx-auto flex items-center justify-end gap-2 ">
            <button className={`${changeLayout === true ? "bg-primary-300" : ""} border rounded-md border-black dark:border-white p-2 transition ease-in-out delay-150  hover:scale-110 hover:bg-primary-200`}
              onClick={() => { setChangeLayout(true) }}
            >
              <AdjustmentsHorizontalIcon className="w-5 text-black dark:text-white  " />

            </button>
            <button className={`${changeLayout === false ? "bg-primary-300" : ""} border rounded-md border-black dark:border-white  p-2  transition ease-in-out delay-150  hover:scale-110 hover:bg-primary-200  `}
              onClick={() => { setChangeLayout(false) }}
            >

              <AdjustmentsVerticalIcon className="w-5 text-black dark:text-white" />
            </button>
          </div>

          {posts.map((item: any, index: any) => {
            return <motion.div
              key={index + 1}
              className="relative max-w-7xl mb-16 mx-auto"
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-between items-end mt-4  text-center sm:text-center md:text-left ">
                <div className='basic-3/4'>
                  <h2 className="text-xl tracking-tight font-extrabold text-primary-100 md:text-3xl">{item.name}</h2>
                </div >
                <div className='basic-1/4'>
                  {/* <Link href={`/blog/skills/${item.slug}`}>
                    <a className='group float-right text-md font-bold hover:text-primary-300 ' >
                      Show More
                      <ChevronDoubleRightIcon className='hidden group-hover:inline ml-2 w-5 h-5 ' />
                    </a>
                  </Link> */}
                  <button
                    className='group float-right text-md font-bold hover:text-primary-300 '
                    onClick={() => { setShowMore(showMore.map((item: any) => index + 1 === item.key ? { ...item, check: !item.check } : item)) }}
                  >
                    {showMore[index].check === false ? "Show More" : "Hide "}
                    <ChevronDoubleRightIcon className='hidden group-hover:inline ml-2 w-5 h-5 ' />
                  </button>
                </div>
              </div>
              <motion.div
                className={`${changeLayout === true ? "lg:grid-cols-2" : "lg:grid-cols-4"} mt-12 max-w-lg mx-auto grid gap-5 md:grid-cols-2  md:max-w-none  lg:max-w-none`}


              >
                {item.value.map((post: any, index2: any) => {

                  if (showMore[index].check === false) {
                    if (index2 <= 7) {
                      return <LazyLoad
                        height={100}
                        offset={[-100, 100]}
                        placeholder={<span>Loading...</span>}
                      >
                        <motion.div custom={index2 + 1} animate={controls} ><PostCart key={index2 + 1} {...post} /></motion.div>

                      </LazyLoad>
                    }
                  } else {
                    return <motion.div custom={index2 + 1} animate={controls} ><PostCart key={index2 + 1} {...post} /></motion.div>
                  }
                })}
              </motion.div>
            </motion.div>
          })}



        </div>




      </div>


    </div >
  )
}

export default SkillPage

SkillPage.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export function getStaticProps() {
  const categories = [
    { id: 1, name: "ReactJS" },
    { id: 2, name: "NextJS" },
    { id: 3, name: "SQL" },
  ]

  const temp1: any = allPowerBIs
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
        "tags",
        "orderIndex"
      ])
    )
    .sort(
      (a: any, b: any) =>
        a.orderIndex - b.orderIndex
    );

  const temp2: any = allSQLs
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
        "tags",
        "orderIndex"
      ])
    )
    .sort(
      (a: any, b: any) =>
        a.orderIndex - b.orderIndex
    );

  const temp = [...allSkills, ...allSQLs, ...allPowerBIs]
  const posts: any = [
    {
      name: "PowerBI", slug: "powerbi", value: temp1
    },
    {
      name: "SQL", slug: "sql", value: temp2
    },
  ]


  return { props: { posts } };
}