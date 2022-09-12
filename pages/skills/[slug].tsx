import Head from 'next/head'
import React, { ReactNode } from 'react'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { NextPageWithLayout } from '../page'
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout'
import Link from 'next/link'
import { ICategory } from '../../lib/types/Category'
import PostCart from '../../components/cards/post/PostCard'
import MetaHeader from '../../components/meta'
import Pagination from '../../components/pagination/Pagination'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { allResources, allSkills, allSQLs, allPowerBIs, allDocuments } from 'contentlayer/generated'
import { pick } from '@/utils/pick'
import { NextSeo } from 'next-seo'
import LazyLoad from 'react-lazyload';

type SkillsSlugPageProps = {
  posts: any
}

const SkillsSlugPage: NextPageWithLayout = ({ posts, tags, category }: any) => {

  const router = useRouter()
  const current = router.query.page ? Number(router.query.page) : 1

  const page = Math.round((posts.length / 8) + 0.5)
  console.log("page", page);

  let posts2: any = []
  for (let index = 0; index < posts.length; index++) {
    if (index < (current * 8) && index >= ((current - 1) * 8)) {
      posts2.push(posts[index])
    }
  }

  console.log("posts", posts);
  console.log("posts2", posts2);

  return (
    <div>
      {/* <MetaHeader title="Lastest Blog" /> */}
      <NextSeo title={category.name} description={`SkillRank ${category.name} Post`} />

      <div>

        <div className="relative bg-gray-50 dark:bg-dark-100 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
          <div className="grid grid-cols-4 gap-12 relative max-w-7xl mb-16 mx-auto">
            <div className="col-span-4 lg:col-span-3">
              <div className="flex justify-between items-end   text-center sm:text-center md:text-left ">
                <div className='basic-3/4'>
                  <h2 className="text-3xl tracking-tight font-extrabold text-primary-100 sm:text-4xl">{category.name}</h2>

                </div >
                <div className='basic-1/4 hidden md:block'>
                  <span className=' float-right text-lg font-bold  ' >
                    {posts.length} Posts
                  </span>
                </div>
              </div>


              <div className="mt-12 max-w-lg mx-auto grid gap-5  md:grid-cols-2 md:max-w-none lg:max-w-none">
                {/* {posts.map((post, index) => (
                                    <PostCart key={index + 1} {...post} />
                                ))} */}
                {posts2.map((post: any, index: any) => (
                  <LazyLoad
                    key={index + 1}
                    height={100}
                    offset={[-100, 100]}
                    placeholder={<span>Loading...</span>}
                  >
                    <PostCart key={index + 1} {...post} />

                  </LazyLoad>
                ))}

              </div>

            </div>

            <div className="hidden  lg:block  md:col-span-1 ">
              <div className="">
                <h1 className='mt-2 text-2xl font-bold text-primary-100 ' >
                  Tags
                </h1>
                <div className="mt-4  ">
                  {tags.map((item: any, index: number) => {
                    return <div
                      key={index + 1}
                      className=" group relative  inline-block mr-2 mb-2 hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out text-xs  font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-gray-900 dark:text-white dark:bg-dark-200 rounded-full"
                    >

                      <Link href={`/tags/${item.slug}`} >
                        <a className='group-hover:text-primary-200  '>
                          {item.name}
                        </a>
                      </Link>
                    </div>
                  })}

                </div>
                <div className="mt-4">
                  <h1 className='mt-4 text-2xl font-bold text-primary-100 ' >
                    Popular Post
                  </h1>
                  {posts.map((item: any, index: any) => {
                    return <div key={index + 1} className="flex mt-2 group hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out ">
                      <div className="basic-1/4">
                        <ChevronRightIcon className='h-6 w-6 group-hover:text-primary-100' />
                      </div>
                      <div className="basic-3/4">
                        <Link href={`/post/${item.slug}`}>
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
            maximum={page}
            resolveLink={(page) =>
              `/lastest?page=${page}`
            }
          />

        </div>




      </div>


    </div>
  )
}

export default SkillsSlugPage

SkillsSlugPage.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allDocuments.map((resource: any) => ({
      params: { slug: resource.category.slug },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<any> = async (context: GetStaticPropsContext) => {




  const filterPost: any = allDocuments
    .filter((resource: any) => resource.category.slug === context?.params?.slug)

    .sort(
      (a: any, b: any) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    );
  const posts = filterPost.map((resource: any) => {
    return pick(resource, [
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
  })

  let tags: any = [];
  posts.map((item: any) => {
    item.tags.map((item2: any) => {
      const existing = tags.find((e: any) => e.id == item2.id);
      if (existing) {
        existing.count = existing.count + 1
      } else {
        tags.push({ ...item2, count: 1 });
      }
    })
  })

  let categoryFilter: any = [];
  posts.map((item: any) => {
    const existing = categoryFilter.find((e: any) => e.id == item.id);
    if (existing) {
      existing.count = existing.count + 1
    } else {
      categoryFilter.push({ ...item.category, count: 1 });
    }
  })
  const category = categoryFilter[0]





  return { props: { posts, tags, category } };
};