import React, { FC } from 'react'
import Layout from '@theme/Layout'
import Head from '@docusaurus/Head'
import Features from '../components/Features'
import Examples from '../components/Examples'
import styles from './index.module.css'
import { HiCheckCircle } from 'react-icons/hi'

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
      <div
        style={{
          background:
            'linear-gradient(92.88deg, rgb(21 24 34) 9.16%, rgb(14 11 30) 43.89%, rgb(0 0 0) 64.72%)',
        }}
      >
        <main className={styles.container}>
          <div className={styles.heading}>
            Build NFT apps
            <br />
            powered by liquidity
          </div>
          <div className={styles.subTitle}>
            Reservoir gives open and permissionless access to aggregated NFT
            liquidity, unlocking powerful new use cases
          </div>
          <div
            style={{
              display: 'grid',
              justifyItems: 'center',
              marginBottom: '110px',
            }}
          >
            <a
              style={{
                display: 'inline-block',
                padding: '10px 25px',
                textDecoration: 'none',
                background:
                  'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)',
                borderRadius: '5px',
              }}
              href="/docs/api/overview"
            >
              View the API docs
            </a>
          </div>

          <div className={styles.useCases}>
            {[
              'Community Marketplace',
              'Portfolio Tracker',
              'Instant Sell',
              'Market Maker',
              'Decentralized Order Book',
              'Pricing Model',
              'Trait Explorer',
              'Floor Sweeper',
            ].map((item) => (
              <div
                style={{ display: 'flex', gap: '5px', alignItems: 'center' }}
              >
                <HiCheckCircle style={{ height: '15px', width: '15px' }} />
                <div key={item} style={{ padding: '10px 0px' }}>
                  {item}
                </div>
              </div>
            ))}
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
