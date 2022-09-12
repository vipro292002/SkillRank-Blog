import TableContent from "@/components/Post/TableContent";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { ChevronDownIcon, ChevronRightIcon, HomeIcon, BookmarkSquareIcon, ShareIcon } from '@heroicons/react/24/solid'
import { useRouter } from 'next/router'
import { convertTime } from "@/utils/convertTime";
import PostCart from "@/components/cards/post/PostCard";
import { useRef, useState } from "react";
import { PostMetrics } from "@/components/Post/PostMetrics";
import { usePostLikes } from "@/lib/usePostLikes"


export const ContentPostArticle = ({slug, category, title, description, children, heading, tags, author, publishedAt, relatePosts }: any) => {

  // const [height, setHeight] = useState(0)
  // const ref = useRef(null)
  const router = useRouter();
  console.log("router", router.pathname.split("/"));
  const arr = router.pathname.split("/")
  const breadcrumb = []
  for (let i = 1; i < arr.length; i++) {
    const element = arr[i];
    breadcrumb.push(element)
  }
  console.log("breadcrumb", breadcrumb);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });


  return (
    <>
      <div className="bg-primary-300 dark:bg-primary-400 pt-24 pb-16 px-4 lg:px-0">
        <div className=" max-w-7xl mx-auto  ">
          <nav className="flex max-w-7xl  mx-auto " aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div>
                  <Link href='/' >
                    <a className="text-gray-500 dark:text-gray-300 hover:text-primary-100 dark:hover:text-white text-base ">
                      Home
                    </a>
                  </Link>
                </div>
              </li>
              <li >
                <div className="flex items-center">
                  <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-white" aria-hidden="true" />
                  <a
                    href={category.slug}
                    className="ml-4 text-base font-medium text-gray-500 dark:text-gray-300 hover:text-primary-100 dark:hover:text-white"
                  // aria-current={page.current ? 'page' : undefined}
                  >
                    {category.name}
                  </a>
                </div>
              </li>
              <li >
                <div className="flex items-center">
                  <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400 dark:text-white" aria-hidden="true" />
                  <span

                    className="ml-4 text-base font-medium text-gray-500 dark:text-gray-300 hover:text-primary-100 dark:hover:text-white"
                  // aria-current={page.current ? 'page' : undefined}
                  >
                    {title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>


          <h1 className='mt-6 block  text-5xl font-bold leading-8 tracking-tight text-gray-900 dark:text-white sm:text-4xl'>
            {title}
          </h1>
          <span className='mt-2 block  text-xl   text-gray-900 dark:text-white '>
            {description}
          </span>
          <div className="flex space-x-1 text-sm mt-2 text-gray-900 dark:text-white">
            <time dateTime={publishedAt}>{convertTime(publishedAt)}</time>
            <span aria-hidden="true">&middot;</span>
            <span>300 Views </span>
            <span aria-hidden="true">&middot;</span>
            <span>300 Likes</span>
          </div>
          <PostMetrics slug={slug} />
          

        </div>
      </div>

      <div className="relative py-24 bg-gray-50 dark:bg-dark-100 overflow-hidden">
        <motion.div className="progress-scroll" style={{ scaleX }} />
        <div className="relative    px-6 lg:px-0 grid grid-cols-4 max-w-7xl mx-auto gap-4  ">

          <div className="col-span-4 lg:col-span-3 ">

            <div className={` block lg:hidden  `}>
              <TableContent heading={heading} slug={slug} />
            </div>

            <article className=' prose-md  prose dark:prose-invert  pb-24 lg:prose-lg !max-w-full 
            
            prose-code:bg-gray-200 prose-code:rounded dark:prose-code:bg-dark-300 prose-code:p-1 prose-code:text-primary-100
            prose-a:text-blue-link 
            '>
              {children}
            </article>



            <div className="mt-6 flex justify-between ">
              <div className=" flex items-center gap-3">

                <div className=" flex-shrink-0">
                  <Link href={`/author/${author.slug}`} >
                    <a>
                      <span className="sr-only">{author.name}</span>
                      <img className="h-10 w-10 rounded-full" src={author.image} alt="" />
                    </a>
                  </Link>
                </div>

                <div className="">
                  <Link href={`/author/${author.slug}`} >
                    <a className="hover:underline text-sm font-medium text-gray-900 dark:text-white hover:text-primary-100">
                      {author.name}
                    </a>
                  </Link>
                  <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-300">

                    <span>CTO SkillRank</span>
                    {/* <span aria-hidden="true">&middot;</span> */}

                  </div>


                </div>



              </div>

              <div className=" ">
                <button className="float-right p-4">

                  <ShareIcon className="h-6 w-6 hover:text-primary-100" />
                </button>
                <button className="float-right p-4">

                  <BookmarkSquareIcon className="h-6 w-6 hover:text-primary-100" />
                </button>
              </div>
            </div>

            <>
              <h1 className="mt-6">Tags:</h1>
              <div className="mt-2 flex items-center gap-2 ">
                {tags.map((item: any, index: number) => {
                  return <div
                    key={index + 1}
                    className="hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-gray-900 dark:text-white dark:bg-dark-200  rounded-full"
                  >

                    <Link href={`/tags/${item.slug}`} >
                      <a className='hover:text-primary-200  '>
                        {item.name}
                      </a>
                    </Link>
                  </div>
                })}

              </div>
            </>

            {/* <div className="mt-6 grid grid-cols-3 gap-4">
              {relatePosts.map((item: any, index: number)=>{
                return <PostCart key={index + 1} {...item} />
              })}
            </div> */} 
            {/* relate post */}

            {/* <div className="mt-6 grid grid-cols-3 gap-4">
              {relatePosts?.map((item: any, index: number)=>{
                return <PostCart key={index + 1} {...item} />
              })}
            </div> */}


          </div>

          <div className={` hidden lg:block  md:col-span-1`}>
            <TableContent heading={heading} slug={slug} />
          </div>

        </div>

      </div>
    </>
  );
};