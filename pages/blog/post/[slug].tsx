import React, { useState } from 'react'
import TableContent from '../../../components/Post/TableContent'

import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import { ChevronDownIcon, FilterIcon, MinusSmIcon, PlusSmIcon, ViewGridIcon, ChevronRightIcon, HomeIcon } from '@heroicons/react/solid'
import { Link as LinkScroll } from "react-scroll"
import TextBlock from '../../../components/Post/TextBlock'
import { NextPageWithLayout } from '../../page'
import PrimaryLayout from '../../../components/layouts/primary/PrimaryLayout'
import MetaHeader from '../../../components/meta'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CodePen, CodeSandbox, YouTube  } from 'mdx-embed';
import { NextSeo } from 'next-seo';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { allResources, allSkills } from 'contentlayer/generated'

import { ResourceArticle } from '@/components/display/post/ResourceArticle'
import { useMDXComponent } from 'next-contentlayer/hooks';
import CodeBlock from '../../../components/Post/CodeBlock'

type DetailPostProps = {
    post: any
}

const mdxComponents = {
    CodePen,
    CodeSandbox,
    YouTube,
    CodeBlock
  };

const DetailPost: NextPageWithLayout = ({ post }: any) => {
    const pages = [
        { name: 'Projects', href: '#', current: false },
        { name: 'Project Nero', href: '#', current: true },
    ]
    const router = useRouter();
    console.log("router", router.pathname.split("/"));
    const arr = router.pathname.split("/")
    const breadcrumb = []
    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        breadcrumb.push(element)
    }
    console.log("breadcrumb", breadcrumb);

    const posts = {
        title: 'Boost your conversion rate',
        href: '#',
        category: { name: 'Article', href: '#' },
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        imageUrl:
            'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
        readingTime: '6 min',
        author: {
            name: 'Roel Aufderehar',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        tags: [
            { id: 1, name: "React" },
            { id: 2, name: "SQL" },
            { id: 3, name: "NextJS" },
        ],
        view: 1022,
        like: 5666
    }

    const data = `<p>
  2222Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
  Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
  tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.{' '}
  <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
</p>
<ul role="list">
  <li>Quis elit egestas venenatis mattis dignissim.</li>
  <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
  <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
</ul>
<p>
  Quis semper vulputate aliquam venenatis egestas sagittis quisque orci. Donec commodo sit viverra aliquam
  porttitor ultrices gravida eu. Tincidunt leo, elementum mattis elementum ut nisl, justo, amet, mattis. Nunc
  purus, diam commodo tincidunt turpis. Amet, duis sed elit interdum dignissim.
</p>`

const MDXContent = useMDXComponent(post.body.code);

    return (
        <div>
            {/* <MetaHeader title={"Post"} /> */}

            <nav className="flex max-w-screen-lg mx-auto px-4" aria-label="Breadcrumb">
                <ol role="list" className="flex items-center space-x-4">
                    <li>
                        <div>
                            <Link href='/' >
                                <span className="text-gray-400 hover:text-gray-500">
                                    <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                                    <span className="sr-only">Home</span>
                                </span>
                            </Link>
                        </div>
                    </li>
                    {pages.map((page) => (
                        <li key={page.name}>
                            <div className="flex items-center">
                                <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                <a
                                    href={page.href}
                                    className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                                    aria-current={page.current ? 'page' : undefined}
                                >
                                    {page.name}
                                </a>
                            </div>
                        </li>
                    ))}
                </ol>
            </nav>
            {/* <TableContent /> */}

            {/* <div className="relative py-16 bg-white overflow-hidden">
                <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
                    <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                        <svg
                            className="absolute top-12 left-full transform translate-x-32"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                        </svg>
                        <svg
                            className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                        </svg>
                        <svg
                            className="absolute bottom-12 left-full transform translate-x-32"
                            width={404}
                            height={384}
                            fill="none"
                            viewBox="0 0 404 384"
                        >
                            <defs>
                                <pattern
                                    id="d3eb07ae-5182-43e6-857d-35c643af9034"
                                    x={0}
                                    y={0}
                                    width={20}
                                    height={20}
                                    patternUnits="userSpaceOnUse"
                                >
                                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                </pattern>
                            </defs>
                            <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                        </svg>
                    </div>
                </div>
                <div className="relative    sm:px-6 lg:px-8 flex  max-w-screen-lg mx-auto gap-4 ">
                    <div className="basic-4/4  md:basic-3/4 ">
                        <div className="text-lg  ">
                            <h1>
                                <span className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    JavaScript for Beginners
                                </span>
                            </h1>
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <Link href={posts.author.href} >
                                        <div>
                                            <span className="sr-only">{posts.author.name}</span>
                                            <img className="h-10 w-10 rounded-full" src={posts.author.imageUrl} alt="" />
                                        </div>
                                    </Link>
                                </div>
                                <div className="ml-3">
                                    <Link href={posts.author.href} >
                                        <div className="hover:underline text-sm font-medium text-gray-900 hover:text-primary-100">
                                            {posts.author.name}
                                        </div>
                                    </Link>
                                    <div className="flex space-x-1 text-sm text-gray-500">
                                        <time dateTime={posts.datetime}>{posts.date}</time>
                                        <span aria-hidden="true">&middot;</span>
                                        <span>{posts.readingTime} read</span>
                                        <span aria-hidden="true">&middot;</span>
                                        <span>{posts.view} views</span>
                                        <span aria-hidden="true">&middot;</span>
                                        <span>{posts.like} likes</span>
                                    </div>
                                </div>

                            </div>
                            <p className="mt-8 text-xl text-gray-500 leading-8">
                                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget
                                aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget. Eleifend
                                egestas fringilla sapien.
                            </p>
                        </div>
                        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                            <TextBlock data={data} />
                            <h2>From beginner to expert in 30 days</h2>
                            <p>
                                Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                                Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus
                                mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
                                ipsum eu a sed convallis diam.
                            </p>
                            <blockquote>
                                <p>
                                    Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique
                                    pellentesque. Blandit amet, sed aenean erat arcu morbi.
                                </p>
                            </blockquote>
                            <p>
                                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                                sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                            </p>
                            <figure>
                                <img
                                    className="w-full rounded-lg"
                                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
                                    alt=""
                                    width={1310}
                                    height={873}
                                />
                                <figcaption>Sagittis scelerisque nulla cursus in enim consectetur quam.</figcaption>
                            </figure>
                            <h2>Everything you need to get up and running</h2>
                            <p>
                                Purus morbi dignissim senectus mattis <a href="#">adipiscing</a>. Amet, massa quam varius orci dapibus
                                volutpat cras. In amet eu ridiculus leo sodales cursus tristique. Tincidunt sed tempus ut viverra ridiculus
                                non molestie. Gravida quis fringilla amet eget dui tempor dignissim. Facilisis auctor venenatis varius nunc,
                                congue erat ac. Cras fermentum convallis quam.
                            </p>
                            <p id="test1">
                                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                                sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
                            </p>
                        </div>
                    </div>

                    <div className={`basic-0 hidden  lg:block  md:basic-1/4  w-full`}>
                        <TableContent />
                    </div>

                </div>
      
            </div> */}

            <NextSeo title={post.title} description={post.seoDescription}  />

            <ResourceArticle title={post.title} category={post.category} heading={post.headings}>
                <MDXContent components={mdxComponents} />
            </ResourceArticle>

        </div>
    )
}

export default DetailPost


DetailPost.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: allResources.map((resource) => ({
            params: { slug: resource.slug },
        })),
        fallback: false,
    };
};
// server
export const getStaticProps: GetStaticProps<any> = async (context: GetStaticPropsContext) => {
    console.log("context", context);
    
    const post = allResources.find(
        (resource) => resource.slug === context.params?.slug
    );
    // console.log("post", post);
    console.log("allSkills", allSkills);

    return { props: { post } };
};

