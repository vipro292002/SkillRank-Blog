import React, { Fragment, useEffect, useState } from 'react'
import TextBlock from './TextBlock'
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon } from '@heroicons/react/solid'
import { Link } from "react-scroll"


type Props = {}

const TableContent = (props: Props) => {



  const [stickyClass, setStickyClass] = useState('');

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 100 ? setStickyClass('fixed') : setStickyClass('');
    }
  };



  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, [])

  return (
    <div className={` sticky top-6 !col-start-4 row-span-6 mt-1.5 hidden xl:block`}>
      <h1>TABLE OF CONTENTS</h1>
      <Link to="test1" spy={true} smooth={true} offset={50} duration={500}>Test</Link>
    </div>
  )
}

export default TableContent