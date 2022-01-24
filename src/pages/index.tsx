import React, { FC } from 'react'
import Layout from '@theme/Layout'
import Head from '@docusaurus/Head'
import Features from '../components/Features'
import Examples from '../components/Examples'
import styles from './index.module.css'

const Home: FC = () => {
  return (
    <Layout title="Reservoir Docs" description="Reservoir Documentation">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.heading}>A Global Pool of NFT Liquidity</div>
        <Features />
        <div className={styles.title}>Built on Reservoir</div>
        <Examples />
      </main>
    </Layout>
  )
}

export default Home
