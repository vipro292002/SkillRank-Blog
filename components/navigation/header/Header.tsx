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

  // const solutions = [
  //   {
  //     id: 1,
  //     name: 'Career Paths',
  //     description: 'Get a better understanding of where your traffic is coming from.',
  //     href: '#',
  //     icon: InboXMarkIcon,
  //   },
  //   {
  //     id: 2,
  //     name: 'Skills',
  //     description: 'Speak directly to your customers in a more meaningful way.',
  //     href: '#',
  //     icon: AnnotationIcon,
  //   }
  // ]
  const router = useRouter();
  const [changeTheme, setChangeTheme] = useState(false)

  // const subCategoryPost = [
  //   {
  //     id: 1,
  //     mainCate: 2,
  //     name: 'SQL',
  //     description: 'Get a better understanding of where your traffic is coming from.',
  //     href: '#',
  //     icon: InboXMarkIcon,
  //   },
  //   {
  //     id: 2,
  //     mainCate: 2,
  //     name: 'Power BI',
  //     description: 'Speak directly to your customers in a more meaningful way.',
  //     href: '#',
  //     icon: AnnotationIcon,
  //   }
  // ]

  // const solutions = [
  //   {
  //     name: 'Analytics',
  //     description: 'Get a better understanding of where your traffic is coming from.',
  //     href: '#',
  //     icon: ChartBarIcon,
  //   },
  //   {
  //     name: 'React',
  //     description: 'Speak directly to your customers in a more meaningful way.',
  //     href: '#',
  //     icon: CursorClickIcon,
  //   },
  //   { name: 'Security', description: "Your customers' data will be safe and secure.", href: '#', icon: ShieldCheckIcon },
  //   {
  //     name: 'Next.js',
  //     description: "Connect with third-party tools that you're already using.",
  //     href: '#',
  //     icon: ViewGridIcon,
  //   },
  //   {
  //     name: 'HTML',
  //     description: 'Build strategic funnels that will drive your customers to convert',
  //     href: '#',
  //     icon: RefreshIcon,
  //   },
  //   {
  //     name: 'CSS',
  //     description: 'Get detailed reports that will help you make more informed decisions ',
  //     href: '#',
  //     icon: DocumentTextIcon,
  //   },
  // ]
  const resources = [
    {
      name: 'SQL',
      description: 'Get all of your questions answered in our forums or contact support.',
      slug: 'sql',
      icon: DocumentTextIcon,
    },
    {
      name: 'Power BI',
      description: 'Learn how to maximize our platform to get the most out of it.',
      slug: 'powerbi',
      icon: DocumentTextIcon,
    }

  ]


  const navigation = [
    { name: 'Lastest', href: '#' }
  ]

  const activeLink = (href: string) => {
    if (href.split("/")[3] === router.query.id && href.split("/")[3]) {
      console.log("href3", href);
      return styles.active_link

    } else if (router.pathname.split("/")[2] === href.split('/')[2] && router.pathname.split("/")[2] && router.pathname.split("/")[3] === undefined) {
      console.log("href", href);
      return styles.active_link

    } else if (router.pathname.startsWith(href) && router.pathname.split("/")[2] === undefined) {
      console.log("href2", href);
      return styles.active_link

    }
  }
  const a = "/blog/category/1"
  console.log("router", router.pathname.split("/")[3]);
  console.log("a", a.split("/")[3]);
  console.log("active", router.pathname.startsWith("/blog") ? "true" : "false");
  console.log("id", router.query.id);



  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }

  

  



  return (
    <header className='sticky top-0 z-10 backdrop-blur-sm bg-white/10 dark:bg-black/10 '  {...headerProps}>
      <Popover className={styles.header_container}>
        <div className="flex   justify-between items-center px-4 py-6  sm:px-6 md:justify-start md:space-x-10">
          <>
            <Link href={`/`} >
              <div className="flex">
                <img
                  className="h-8 w-auto sm:h-10"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt=""
                />
              </div>
            </Link>
          </>

          <div className="-mr-2 -my-2 md:hidden order-last flex gap-2">
            <ChangeThemeButton />
            <Popover.Button className="bg-gray-200 dark:bg-gray-600 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-100">
              <span className="sr-only">Open menu</span>
              <Bars4Icon className="h-5 w-5" aria-hidden="true" />
            </Popover.Button>
          </div>

          <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
            <Popover.Group as="nav" className="flex space-x-10">

              <Link href={`/blog/lastest`} >
                <a className={`text-base font-medium text-black dark:text-white  hover:text-primary-100 ${activeLink("/blog/lastest")} `}>
                  Lastest
                </a>
              </Link>


              <Popover className="relative">
                {({ open }: any) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? 'text-primary-100' : 'text-black',
                        'group  dark:text-white rounded-md inline-flex items-center text-base font-medium hover:text-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-100'
                      )}
                    >
                      <Link href={`/blog/skills`} >
                        <a className={`${activeLink("/blog/skills")}`}>Skills</a>
                      </Link>
                      <ChevronDownIcon
                        className={classNames(
                          open ? 'text-primary-100' : 'text-gray-400',
                          'ml-2 h-5 w-5 group-hover:text-primary-100'
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
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="relative grid gap-6 bg-white  px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                            {resources.map((item: any) => (
                              <Link
                                key={item.name}
                                href={`/blog/skills/${item.slug}`}

                              >
                                <div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 dark:hover:bg-dark-200" >
                                  <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-100 text-white sm:h-12 sm:w-12">
                                    <item.icon className="h-6 w-6" aria-hidden="true" />
                                  </div>
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900 ">{item.name}</p>
                                    <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                                  </div>
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="p-5 bg-gray-50 sm:p-8">
                            {/* <a href="#" className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                              <div className="flex items-center">
                                <div className="text-base font-medium text-gray-900">Enterprise</div>
                                <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800">
                                  New
                                </span>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">
                                Empower your entire team with even more advanced tools.
                              </p>
                            </a> */}
                            <Link href={`/blog`} >
                              <a className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100">
                                <div className="flex items-center">
                                  <div className="text-base font-medium text-gray-900">Latest Post</div>
                                  <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-primary-100">
                                    New
                                  </span>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  Total of Latest Post
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
              <YoutubeFilled style={{ fontSize: 28, color: '#FF0000' }} />

            </Link>
            <Link href={`/`} >
              <FacebookFilled style={{ fontSize: 28, color: '#0C88EF' }} />

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
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white  divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">

                  <>
                    <Link href={`/`} >
                      <img
                        className="h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        alt="Workflow"
                      />
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
                        href={`/blog/skills/${item.slug}`}
                      >
                        <div className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50 ">
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-100 text-white">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900 ">{item.name}</div>
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

                <Link href={`/blog/lastest`} >
                  <a className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100 ">
                    <div className="flex items-center">
                      <div className="text-base font-medium text-gray-900 ">Latest Post</div>
                      <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-primary-100">
                        New
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
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



