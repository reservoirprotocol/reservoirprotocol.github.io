import React, { FC } from 'react'
import Layout from '@theme/Layout'
import Head from '@docusaurus/Head'
import Features from '../components/Features'
import Examples from '../components/Examples'
import { HiCheckCircle, HiArrowRight } from 'react-icons/hi'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Contact from '../components/Contact'
import Code from '../components/Code'

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
        <main className="container px-2 pb-24">
          <div className="grid place-content-center lg:h-screen">
            <div className="mt-20 mb-6 text-center text-3xl font-black lg:mt-28 lg:text-6xl">
              Build NFT apps
              <br />
              powered by liquidity
            </div>
            <div className="mx-auto mb-16 max-w-2xl text-center text-lg text-[#95a2b3] lg:mb-20 lg:text-xl">
              Reservoir gives open and permissionless access to aggregated NFT
              liquidity, unlocking powerful new use cases
            </div>
            <div className="mb-14 grid justify-center">
              <a
                className="mb-24 flex items-center gap-2 rounded-lg py-4 px-7 font-bold text-white no-underline lg:py-5 lg:px-8 lg:text-lg"
                style={{
                  background:
                    'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)',
                }}
                href="/docs/api/overview"
              >
                View the API docs
                <HiArrowRight />
              </a>
            </div>

            <div className="mx-auto mb-36 grid grid-cols-2 gap-4 text-[#f7f8f8] lg:grid-cols-4 lg:justify-center">
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
                <div className="flex items-center gap-2 pl-3">
                  <HiCheckCircle className="h-4 w-4 flex-none" />
                  <div key={item} className="px-3">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-conic-1 relative">
            <div className="relative z-10">
              <Section1 />
              <Section2 />
              <Section3 />
            </div>
          </div>

          <Code />
          <Features />
          <Examples />

          <div className="bg-conic-2 relative">
            <div className="relative z-10">
              <Contact />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}

export default Home
