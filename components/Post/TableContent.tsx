import React, { Fragment, useEffect, useState } from 'react'
import TextBlock from './TextBlock'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'


type TableContentProps = {
  heading: any
}

const TableContent = ({ heading }: TableContentProps) => {



  const [stickyClass, setStickyClass] = useState('');

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 100 ? setStickyClass('fixed pt-16 !w-[272px]') : setStickyClass('');
    }
  };
  console.log("heading table content", heading);



  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, [])

  return (
    <div className={`${stickyClass} font-bold  top-6 !col-start-4 row-span-6 mt-1.5 hidden lg:block overflow-hidden `}>
      <h1>TABLE OF CONTENTS</h1>
      <div className="space-y-2">
        {/* <Link to="test1" spy={true} smooth={true} offset={50} duration={500}>
          <span className={"mt-4 block text-black underline-offset-2 transition-all hover:text-primary-100 hover:underline hover:decoration-primary-100"}>
            Test
          </span>
        </Link> */}

        {heading.map((item: any, index: any) => {
          return <a href={`#${item.slug}`} className={`${item.heading === 2 ? "pl-2" : "pl-4"}  mt-4 block text-sm text-black dark:text-white underline-offset-2 transition-all hover:!text-primary-100 hover:underline hover:decoration-primary-100`}>
             {item.text}
          </a>

          // <Link to={`${item.slug}`} spy={true} smooth={true} offset={0} duration={500}>
          //   <span className={`${item.heading === 2?"pl-2" :"pl-4"}  mt-4 block font-sm text-black underline-offset-2 transition-all hover:text-primary-100 hover:underline hover:decoration-primary-100`}>
          //     {item.text}
          //   </span>
          // </Link>
        })}

      </div>

    </div>
  )
}

export default TableContent