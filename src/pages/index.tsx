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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.bgImage}>
        <main className={styles.container}>
          <div className={styles.heading}>A global pool of NFT liquidity</div>
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
