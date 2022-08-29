import React, { useState } from 'react'
import TableContent from '../../../components/Post/TableContent'

import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'

import { ChevronDownIcon, ChevronRightIcon, HomeIcon } from '@heroicons/react/24/solid'
import { Link as LinkScroll } from "react-scroll"

import { NextPageWithLayout } from '../../page'
import PrimaryLayout from '../../../components/layouts/primary/PrimaryLayout'
import MetaHeader from '../../../components/meta'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CodePen, CodeSandbox, YouTube } from 'mdx-embed';
import { NextSeo } from 'next-seo';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { allResources, allSkills, allPowerBIs, allSQLs, allDocuments } from 'contentlayer/generated'

import { useMDXComponent } from 'next-contentlayer/hooks';
import CodeBlock from '../../../components/Post/CodeBlock'
import TextBlock from '../../../components/Post/TextBlock'
import { ContentPostArticle } from '@/components/display/post/ContentPostArticle'


type DetailPostProps = {
    post: any
}

const mdxComponents = {
    CodePen,
    CodeSandbox,
    YouTube,
    CodeBlock,
    TextBlock
};

const DetailPost: NextPageWithLayout = ({ post }: any) => {
    console.log("allDocuments", allDocuments);
   

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




    const MDXContent = useMDXComponent(post.body.code);

    return (
        <div>
           
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


            <NextSeo title={post.title} description={post.seoDescription} />

            <ContentPostArticle title={post.title} category={post.category} heading={post.headings}>
                <MDXContent components={mdxComponents} />
            </ContentPostArticle>

        </div>
    )
}

export default DetailPost


DetailPost.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: allDocuments.map((resource) => ({
            params: { slug: resource.slug },
        })),
        fallback: false,
    };
};
// server
export const getStaticProps: GetStaticProps<any> = async (context: GetStaticPropsContext) => {
    console.log("context", context);
    // const temp = [...allSkills, ...allSQLs, ...allPowerBIs,...allResources]
    const post = allDocuments.find(
        (resource) => resource.slug === context.params?.slug
    );
    // console.log("post", post);
    // console.log("allDocuments", allDocuments);

    return { props: { post } };
};

