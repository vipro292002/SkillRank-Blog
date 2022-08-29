import React from 'react'
import {  ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

type PaginationProps = {
  current: number;
  maximum: number;
  resolveLink: (page: number) => string;
}

const Pagination = ({ current, maximum, resolveLink, }: PaginationProps) => {
  return (
    <div className="">
      {/* <div className="relative flex flex-col items-center my-12 z-10">
        <div className="flex text-gray-700">
          <div className="shadow-lg h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-white cursor-pointer hover:bg-primary-100 hover:text-white ">
            <ChevronLeftIcon className='h-6 w-6' />
          </div>

          <div className="shadow-lg flex h-12 font-medium rounded-full bg-white ">

            <Link href={`/`} >
              <a className="w-12 md:flex justify-center items-center hidden  leading-5 transition duration-150 ease-in  rounded-full bg-primary-100 text-white hover:bg-primary-100 hover:text-white ">
                1
              </a>
            </Link>


            <Link href={`/`} >
              <a className="w-12 md:flex justify-center items-center hidden  leading-5 transition duration-150 ease-in  rounded-full hover:bg-primary-100 hover:text-white ">
                2
              </a>
            </Link>
            <Link href={`/`} >
              <a className="w-12 md:flex justify-center items-center hidden  leading-5 transition duration-150 ease-in  rounded-full hover:bg-primary-100 hover:text-white ">
                3
              </a>
            </Link>
            <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
              ...
            </div>
            <Link href={`/`} >
              <a className="w-12 md:flex justify-center items-center hidden  leading-5 transition duration-150 ease-in  rounded-full hover:bg-primary-100 hover:text-white ">
                11
              </a>
            </Link>
            <Link href={`/`} >
              <a className="w-12 md:flex justify-center items-center hidden  leading-5 transition duration-150 ease-in  rounded-full hover:bg-primary-100 hover:text-white ">
                12
              </a>
            </Link>
            <Link href={`/`} >
              <a className="w-12 md:flex justify-center items-center hidden  leading-5 transition duration-150 ease-in  rounded-full hover:bg-primary-100 hover:text-white ">
                13
              </a>
            </Link>
            <div className="w-12 h-12 md:hidden flex justify-center items-center cursor-pointer leading-5 transition duration-150 ease-in rounded-full bg-primary-100 text-white">2</div>
          </div>

          <div className="shadow-lg h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-white cursor-pointe hover:bg-primary-100 hover:text-white ">
            <ChevronRightIcon className='h-6 w-6' />
          </div>
        </div>
      </div> */}

      <div className=" relative flex items-center justify-center gap-1 flex-wrap">
        {current > 1 && (
          <Link href={resolveLink(current - 1)}>
            <a className="shadow-lg h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-white dark:bg-dark-300 cursor-pointer hover:bg-primary-100 hover:text-white ">
              <ChevronLeftIcon className='h-6 w-6' />
            </a>
          </Link>

        )}


        <div className="shadow-lg flex h-12 font-medium rounded-full bg-white dark:bg-dark-300 ">
          {current < 5 ? (
            <>
              {new Array(maximum < 5 ? maximum : 5).fill("").map((_, index) => (
                <Link key={index} href={resolveLink(index + 1)} >
                  <a className={`w-12 md:flex justify-center items-center hidden  leading-5 transition duration-150 ease-in  rounded-full  ${current === index + 1 ? "!bg-primary-100 text-white" : ""} hover:bg-primary-100 hover:text-white`}>
                    {index + 1}
                  </a>
                </Link>
              ))}
              {maximum > 5 && (
                <>
                  <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                    ...
                  </div>
                  <Link href={resolveLink(maximum)} >
                    <a className={`w-12 md:flex justify-center items-center hidden  leading-5 transition duration-150 ease-in  rounded-full hover:bg-primary-100 hover:text-white`}>
                      {maximum}
                    </a>
                  </Link>
                </>
              )}
            </>
          ) : current > maximum - 4 ? (
            <>
              <Link href={resolveLink(1)} >
                <a className={`w-12 md:flex justify-center items-center hidden  leading-5 transition duration-150 ease-in  rounded-full hover:bg-primary-100 hover:text-white`}>
                  {1}
                </a>
              </Link>
              <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                ...
              </div>
              {new Array(5).fill("").map((_, index) => (
                <Link key={index} href={resolveLink(maximum - 4 + index)} >
                  <a className={`w-12 md:flex justify-center items-center hidden  leading-5 transition duration-150 ease-in  rounded-full  ${current === maximum - 4 + index ? "!bg-primary-100 text-white" : ""} hover:bg-primary-100 hover:text-white`}>
                    {maximum - 4 + index}
                  </a>
                </Link>
              ))}
            </>
          ) : (
            <>

              <Link href={resolveLink(1)} >
                <a className={`w-12 md:flex justify-center items-center hidden  leading-5 transition duration-150 ease-in  rounded-full hover:bg-primary-100 hover:text-white`}>
                  {1}
                </a>
              </Link>
              <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                ...
              </div>
              {new Array(5).fill("").map((_, index) => (
                <Link key={index} href={resolveLink(current - 2 + index)} >
                  <a className={`w-12 md:flex justify-center items-center hidden  leading-5 transition duration-150 ease-in  rounded-full  ${current === current - 2 + index ? "!bg-primary-100 text-white" : ""} hover:bg-primary-100 hover:text-white`}>
                    {current - 2 + index}
                  </a>
                </Link>
              ))}
              <div className="w-12 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  rounded-full  ">
                ...
              </div>
              <Link href={resolveLink(maximum)} >
                <a className={`w-12 md:flex justify-center items-center hidden  leading-5 transition duration-150 ease-in  rounded-full hover:bg-primary-100 hover:text-white`}>
                  {maximum}
                </a>
              </Link>
            </>
          )}
        </div>


        {current < maximum && (
          <Link href={resolveLink(current + 1)}>
            <a className="shadow-lg h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-white dark:bg-dark-300 cursor-pointer hover:bg-primary-100 hover:text-white ">
              <ChevronRightIcon className='h-6 w-6' />
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Pagination