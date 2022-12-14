import Head from 'next/head'
import React from 'react'

type MetaHeaderProps = {
    title: string

}

const MetaHeader = ({title}: MetaHeaderProps) => {
    return (
        <Head>
            <title>{title} - SkillRank</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

export default MetaHeader