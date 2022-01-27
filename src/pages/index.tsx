import React, { FC } from 'react'
import Layout from '@theme/Layout'
import Head from '@docusaurus/Head'
import Features from '../components/Features'
import Examples from '../components/Examples'
import styles from './index.module.css'

const Home: FC = () => {
  return (
    <Layout>
      <Head>
        <title>Home | Reservoir</title>
        <meta
          name="description"
          content="Reservoir is a blockchain protocol and framework making it easier to build NFT marketplaces and tools, sharing a global pool of NFT liquidity."
        />
        <meta name="keywords" content="NFT, API, Protocol" />
        {/* Twitter */}
        {/* The optimal size is 1200 x 630 (1.91:1 ratio). */}
        <meta
          name="twitter:image"
          content="https://reservoirprotocol.github.io/og.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:site:domain"
          content="https://reservoirprotocol.github.io/"
        />
        <meta
          name="twitter:url"
          content="https://reservoirprotocol.github.io/"
        />
        {/* should be between 30-60 characters, with a maximum of 70 */}
        <meta
          name="twitter:title"
          content="Reservoir Protocol: A global pool of NFT liquidity."
        />
        {/* should be between 55 and 200 characters long */}
        <meta
          name="twitter:description"
          content="Reservoir is a blockchain protocol and framework making it easier to build NFT marketplaces and tools, sharing a global pool of NFT liquidity."
        />
        <meta name="twitter:site" content="@reservoir0x" />

        {/* OG - https://ogp.me/ */}
        {/* https://www.opengraph.xyz/ */}
        {/* should be between 30-60 characters, with a maximum of 90 */}
        <meta
          name="og:title"
          content="Reservoir Protocol: A global pool of NFT liquidity."
        />
        <meta property="og:type" content="website" />
        <meta property="og:determiner" content="the" />
        <meta property="og:locale" content="en" />
        {/* Make sure the important part of your description is within the first 110 characters, so it doesn't get cut off on mobile. */}
        <meta
          property="og:description"
          content="Reservoir is a blockchain protocol and framework making it easier to build NFT marketplaces and tools, sharing a global pool of NFT liquidity."
        />
        <meta property="og:site_name" content="Reservoir Protocol" />
        <meta
          property="og:url"
          content="https://reservoirprotocol.github.io/"
        />
        {/* The optimal size is 1200 x 630 (1.91:1 ratio). */}
        <meta
          property="og:image"
          content="https://reservoirprotocol.github.io/og.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="og:image:alt" content="Reservoir Protocol banner" />
      </Head>
      <div className={styles.bgImage}>
        <main className={styles.container}>
          <div className={styles.heading}>
            Quickly build NFT marketplaces &amp; tools
          </div>
          <div className={styles.subTitle}>
            Reservoir is a web3-native NFT order book protocol and framework
            powering marketplaces and tools all sharing a global pool of
            liquidity.
          </div>
          <Features />
          <div id="builtOnReservoir" className={styles.title}>
            Built on Reservoir
          </div>
          <Examples />
        </main>
      </div>
    </Layout>
  )
}

export default Home
