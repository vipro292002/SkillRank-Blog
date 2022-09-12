import React, { Fragment, useEffect, useState } from 'react'
import TextBlock from './TextBlock'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { LikeButton } from "@/components/buttons/like/ButtonLike";
import { useRouter } from "next/router"

type TableContentProps = {
  heading: any,
  slug: string
}

const TableContent = ({ heading, slug }: TableContentProps) => {



  const [stickyClass, setStickyClass] = useState('');
  const router = useRouter()
  const path = `/post/${slug}`


  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      if (window.screen.width >= 1200) {
        windowHeight > 300 ? setStickyClass('fixed pt-16 !w-[295px]') : setStickyClass('');
      }

    }
  };
  const removeStickNavbar = () => {
    if (window !== undefined) {
      if (window.screen.width < 1200) {
        setStickyClass('')
      }
    }
  };




  useEffect(() => {
    window.addEventListener('resize', removeStickNavbar);
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, [])

  return (
    <div className={`${stickyClass} font-bold  top-6 !col-start-4 row-span-6 mt-1.5  overflow-hidden mb-10`}>
      <h1>TABLE OF CONTENTS</h1>
      <div className="space-y-2 ">
        {/* <Link to="test1" spy={true} smooth={true} offset={50} duration={500}>
          <span className={"mt-4 block text-black underline-offset-2 transition-all hover:text-primary-100 hover:underline hover:decoration-primary-100"}>
            Test
          </span>
        </Link> */}

        {heading.map((item: any, index: any) => {
          return <a key={index + 1} href={`#${item.slug}`} className={`${item.heading === 2 || item.heading === 1 ? "" : "pl-2"}   mt-4 block text-base lg:text-sm  text-black dark:text-white underline-offset-2 transition-all hover:!text-primary-100 hover:underline hover:decoration-primary-100`}>
            {item.text}
          </a>

          // <Link to={`${item.slug}`} spy={true} smooth={true} offset={0} duration={500}>
          //   <span className={`${item.heading === 2?"pl-2" :"pl-4"}  mt-4 block font-sm text-black underline-offset-2 transition-all hover:text-primary-100 hover:underline hover:decoration-primary-100`}>
          //     {item.text}
          //   </span>
          // </Link>
        })}

      </div>

      <div className="flex justify-between  my-10   ">

        <LikeButton slug={slug} />

        <button
          className="text-sm font-bold text-gray-900 dark:text-white"
          onClick={() => {
            window.scrollTo({ top: 0 })
            router.push(path, undefined, { shallow: true })
          }}
        >
          Back to top
        </button>
      </div>

    </div>
  )
}

export default TableContent