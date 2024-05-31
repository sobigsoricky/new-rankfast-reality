import Head from 'next/head'
import React from 'react'

const index = ({ title, description, robots, canonical }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="robots" content={robots} />
                <link rel="canonical" href={canonical} />
                <meta property="og:url" content={`https://rankfastrealty.com/${canonical}`} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="adityaburse.in" />
                <meta property="twitter:url" content={`https://rankfastrealty.com/${canonical}`} />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
            </Head>
        </>
    )
}

export default index