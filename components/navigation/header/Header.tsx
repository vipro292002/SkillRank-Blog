import Link from 'next/link';
import AuthButton from '../../buttons/auth/AuthButton';
import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Popover, Transition, Menu } from '@headlessui/react'
import {
  InboxIcon,
  XMarkIcon,
  Bars4Icon,
  ChartBarIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  MoonIcon,
  SunIcon
} from '@heroicons/react/24/solid'
import { YoutubeOutlined, YoutubeFilled, FacebookFilled } from '@ant-design/icons'
import styles from "./Header.module.css";
import Head from 'next/head';
import { useRouter } from 'next/router';

import { useTheme } from "next-themes";
import ChangeThemeButton from '@/components/changeTheme/changeTheme';

export interface IHeader extends React.ComponentPropsWithoutRef<'header'> { }

const Header: React.FC<IHeader> = ({ className, ...headerProps }) => {

  const router = useRouter();
  const resources = [
    {
      id: 1,
      name: 'SQL',
      description: 'Get all of your questions answered in our forums or contact support.',
      slug: 'sql',
      icon: DocumentTextIcon,
    },
    {
      id: 2,
      name: 'Power BI',
      description: 'Learn how to maximize our platform to get the most out of it.',
      slug: 'power-bi',
      icon: DocumentTextIcon,
    }

  ]


  const activeLink = (href: string) => {
    if (href.split("/")[3] === router.query.id && href.split("/")[3]) {

      return styles.active_link

    } else if (router.pathname.split("/")[2] === href.split('/')[2] && router.pathname.split("/")[2] && router.pathname.split("/")[3] === undefined) {

      return styles.active_link

    } else if (router.pathname.startsWith(href) && router.pathname.split("/")[2] === undefined) {

      return styles.active_link

    }
  }

  const checkPost = router.pathname.includes("/post")


  const [styleBackground, setStyleBackground] = useState('');

  const changeBackground = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 300 ? setStyleBackground('!bg-gray-50 dark:!bg-dark-100') : setStyleBackground('');
    }
  };


  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }



  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => window.removeEventListener('scroll', changeBackground);
  }, [])



  return (
    <header className={`${styleBackground} sticky top-0 z-10 backdrop-blur-sm ${checkPost === true ? "bg-primary-300 dark:bg-primary-400" : "bg-gray-50 dark:bg-dark-100"}    `}  {...headerProps}>
      <Popover className={styles.header_container}>
        <div className="flex  items-end justify-between  px-4 py-6  lg:px-0 md:justify-start md:space-x-10">
          <>
            <Link href={`/`} >
              <div className="flex">
                {/* <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                /> */}
                <span className=" font-extrabold text-2xl hover:text-primary-100 ">
                  SkillRank
                </span>
              </div>
            </Link>
          </>

          <div className="-mr-2 -my-2 md:hidden order-last flex gap-2">
            <ChangeThemeButton />
            <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-100">
              <span className="sr-only">Open menu</span>
              <Bars4Icon className="h-5 w-5" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">

              <Link href={`/lastest`} >
                <a className={`text-base font-medium text-black dark:text-white  hover:text-primary-100 ${activeLink("/lastest")} `}>
                  Lastest
                </a>
              </Link>


              <Popover className="relative">
                {({ open }: any) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-primary-100' : 'text-black',
                        'group  dark:text-white rounded-md inline-flex items-center text-base font-medium focus:outline-none focus:ring-2  focus:ring-primary-100'
                      )}
                    >
                      <Link href={`/skills`} >
                        <a className={`${activeLink("/skills")}  group-hover:text-primary-100`}>Skills</a>
                      </Link>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-primary-100' : 'text-gray-400',
                          'ml-2 h-4 w-4 group-hover:text-primary-100'
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden border-2 dark:border-gray-50">
                          <div className="relative grid gap-6 bg-white dark:bg-dark-100  px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                            {resources.map((item: any) => (
                              <Link
                                key={item.name}
                                href={`/skills/${item.slug}`}

                              >
                                <div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-200 dark:hover:bg-dark-300 " >
                                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-100 text-white sm:h-12 sm:w-12">
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900 dark:text-white ">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 ">{item.description}</p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="p-5 bg-gray-50 dark:bg-dark-100 sm:p-8">
                            <Link href={`/skills`} >
                              <a className="-m-3 p-3 flow-root rounded-md hover:bg-gray-200 dark:hover:bg-dark-300">
                                <div className="flex items-center">
                                  <div className="text-base font-medium text-gray-900 dark:text-white">All Skill</div>
                                  <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 dark:bg-white text-primary-100">
                                    New
                                  </span>
                                </div>
                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                  Total of Skill
                                </p>
                              </a>
                            </Link>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>


            </Popover.Group>

            {/* <div className="flex items-center md:ml-12">
              <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Sign in
              </a>
              <a
                href="#"
                className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-100 hover:bg-primary-200"
              >
                Sign up
              </a>
            </div> */}

          </div>


          <div className="hidden md:flex md:items-center md:justify-end gap-4">


            <ChangeThemeButton />

            <Link href={`/`} >
              <button className="group  rounded-md transition ease-in-out delay-150 duration-500 hover:scale-110  py-[5px] px-2  focus:ring-primary-100">
                <YoutubeFilled style={{ fontSize: 24 }} className='group-hover:text-[#FF0000] text-gray-900 dark:text-gray-200  ' />
              </button>

            </Link>
            <Link href={`/`} >

              <button className="group  rounded-md transition ease-in-out delay-150 duration-500 hover:scale-110  py-[5px] px-2  focus:ring-primary-100">
                <FacebookFilled style={{ fontSize: 24 }} className='group-hover:text-[#0C88EF] text-gray-900 dark:text-gray-200  ' />
              </button>
            </Link>
          </div>

        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden  z-50">
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-dark-300  divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">

                  <>
                    <Link href={`/`} >
                      <div className="flex">
                        {/* <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                /> */}
                        <span className="text-black dark:text-white font-extrabold text-2xl hover:text-primary-100 ">
                          SkillRank
                        </span>
                      </div>
                    </Link>
                  </>

                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-100">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>

                </div>

                <div className="mt-6">
                  <nav className="grid gap-6">
                    {resources.map((item) => (
                      <Link
                        key={item.name}
                        href={`/skills/${item.slug}`}
                      >
                        <div className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50 dark:hover:bg-dark-100 ">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-100 text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900 dark:text-white ">{item.name}</div>
                        </div>
                      </Link>
                    ))}
                  </nav>

                </div>
              </div>
              <div className="py-6 px-5">
                {/* <div className="grid grid-cols-2 gap-4">
                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Pricing
                  </a>

                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Docs
                  </a>

                  <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Enterprise
                  </a>
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="mt-6">
                  
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-100 hover:bg-primary-200"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{' '}
                    <a href="#" className="text-primary-100 hover:text-primary-200">
                      Sign in
                    </a>
                  </p>
                </div> */}

                <Link href={`/lastest`} >
                  <a className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100 dark:hover:bg-dark-100 ">
                    <div className="flex items-center">
                      <div className="text-base font-medium text-gray-900 dark:text-white ">Latest Post</div>
                      <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-primary-100">
                        New
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      Total of Latest Post
                    </p>
                  </a>
                </Link>

              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </header>

  );
};

export default Header;



