import React, { useState } from 'react'
import TableContent from '../../components/Post/TableContent'

import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'


import { Link as LinkScroll } from "react-scroll"

import { NextPageWithLayout } from '../page'
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout'
import MetaHeader from '../../components/meta'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CodePen, CodeSandbox, YouTube } from 'mdx-embed';
import { NextSeo } from 'next-seo';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next'
import { allResources, allSkills, allPowerBIs, allSQLs, allDocuments } from 'contentlayer/generated'

import { useMDXComponent } from 'next-contentlayer/hooks';
import CodeBlock from '../../components/Post/CodeBlock'
import TextBlock from '../../components/Post/TextBlock'
import ImageBlock from '../../components/Post/ImageBlock'
import VideoBlock from '../../components/Post/VideoBlock'
import LikeBlock from '../../components/Post/LikeBlock'
import { ContentPostArticle } from '@/components/display/post/ContentPostArticle'
import { pick } from '@/utils/pick'


type DetailPostProps = {
    post: any
}

const mdxComponents = {
    CodePen,
    CodeSandbox,
    YouTube,
    CodeBlock,
    TextBlock,
    ImageBlock,
    VideoBlock,
    LikeBlock
    
};

const DetailPost: NextPageWithLayout = ({ post, relatePosts }: any) => {

    const MDXContent = useMDXComponent(post.body.code);

    return (
        <div>
            <NextSeo title={post.title} description={post.seoDescription} />

            <ContentPostArticle
                slug={post.slug}
                title={post.title}
                description={post.description}
                category={post.category}
                tags={post.tags}
                author={post.author}
                heading={post.headings}
                publishedAt={post.publishedAt}
                relatePosts={relatePosts}

            >
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

    const post = allDocuments.find(
        (resource) => resource.slug === context.params?.slug
    );

    const postRelateFilter = allDocuments.filter(
        (resource) => post?.category?.slug === resource.category?.slug && resource.title !== post?.title
    );

    function shuffleArray(array: any) {
        let i = array.length - 1;
        for (; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    shuffleArray(postRelateFilter) // sort random array index

    let relatePosts = []
    for (let index = 0; index < postRelateFilter.length; index++) {
        if (index < 3) {
            const flag = pick(postRelateFilter[index], [
                'slug',
                'title',
                'description',
                'publishedAt',
                'readingTime',
                'author',
                'category',
                'image',
                "tags"
            ])
            relatePosts.push(flag)
        }

    }




    return { props: { post, relatePosts } };
};

