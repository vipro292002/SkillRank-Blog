
import { convertTime } from '../../../utils/convertTime'
import Link from 'next/link'
import React from 'react'
import { IPostCard } from '../../../lib/types/PostCard'

type Props = {

}

const PostCart: React.FC<IPostCard> = ({ title, slug, category, description, publishedAt, image, readingTime, author, tags }: IPostCard) => {
  return (
    <a href={`/post/${slug}`}>
      <div className="group flex flex-col rounded-lg shadow-lg overflow-hidden cursor-pointer  transition duration-500 ease-in-out" >
        <div className="flex-shrink-0">
          <img className="h-48 w-full object-cover" src={image} alt="" />
        </div>
        <div className="flex-1 bg-white dark:bg-dark-300 p-6 flex flex-col justify-between">
          <div className="flex-1">

            <Link href={`/skills/${category.slug}`}>
              <span className="text-sm font-medium text-primary-100 hover:underline hover:text-primary-200">
                {category.name}
              </span>
            </Link>

            <Link href={`/post/${slug}`}>
              <div className="block mt-2">
                <p className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary-100">{title}</p>
                <p className="mt-3 text-base text-gray-500 dark:text-gray-300">{description}</p>
              </div>
            </Link>
          </div>
          <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
              <Link href={`/author/${author.slug}`} >
                <a>
                  <span className="sr-only">{author.name}</span>
                  <img className="h-10 w-10 rounded-full" src={author.image} alt="" />
                </a>
              </Link>
            </div>
            <div className="ml-3">
              <Link href={`/author/${author.slug}`} >
                <a className="hover:underline text-sm font-medium text-gray-900 dark:text-white hover:text-primary-100">
                  {author.name}
                </a>
              </Link>
              <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-300">
                <time dateTime={publishedAt}>{convertTime(publishedAt)}</time>
                <span aria-hidden="true">&middot;</span>
                <span>{readingTime.text}</span>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-2 ">
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
        </div>
      </div>
    </a>
  )
}

export default PostCart