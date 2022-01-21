import React, { FC } from 'react'
import Layout from '@theme/Layout'
import Head from '@docusaurus/Head'

const Home: FC = () => {
  return (
    <Layout title="Reservoir Docs" description="Reservoir Documentation">
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <main className="container">
        <h2 className="font-bold text-center text-6xl mt-16 mb-12">
          A Global Pool of NFT Liquidity
        </h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-20">
          {[
            {
              name: 'Composable',
              description:
                'Quickly build marketplaces with aggregated liquidity and custom fees.',
              url: {
                title: 'Read this guide',
                href: '#',
              },
              icon: '',
            },
            {
              name: 'Liquid',
              description:
                'Tap into instant sell liquidity powered by collection and trait-wide bids.',
              url: {
                title: 'Try it out',
                href: '#',
              },
              icon: '',
            },
            {
              name: 'Scalable',
              description:
                'Rerum nam aliquam itaque iusto. Ut officia quia tenetu',
              url: {
                title: 'View docs',
                href: '#',
              },
              icon: '',
            },
            {
              name: 'Open',
              description:
                'Rerum nam aliquam itaque iusto. Ut officia quia tenetu',
              url: {
                title: 'How it works',
                href: '#',
              },
              icon: '',
            },
          ].map(({ name, description, url }) => (
            <div
              key={name}
              className="flex flex-col px-6 py-5 border border-neutral-600 rounded-lg bg-neutral-900 "
            >
              <div className="text-lg font-semibold bg-trueGray-300 mb-2">
                {name}
              </div>
              <div className="mb-3 flex-grow">{description}</div>
              <a href={url.href} className="text-violet-500 text-lg">
                {url.title}
              </a>
            </div>
          ))}
        </div>
        <h2 className="font-bold text-center text-xl mb-6">
          Built on Reservoir
        </h2>
        <div className="grid gap-5 grid-cols-4 mb-20">
          {[
            {
              name: 'Leeve',
              description:
                'Rerum nam aliquam itaque iusto. Ut officia quia tenetu',
            },
            {
              name: 'Instant Capital',
              description:
                'Rerum nam aliquam itaque iusto. Ut officia quia tenetu',
            },
            {
              name: 'ENS Cafe',
              description:
                'Rerum nam aliquam itaque iusto. Ut officia quia tenetu',
            },
            {
              name: 'Hack The Floor',
              description:
                'Rerum nam aliquam itaque iusto. Ut officia quia tenetu',
            },
          ].map(({ name, description }) => (
            <div
              key={name}
              className="px-6 py-5 border border-neutral-600 rounded-lg bg-neutral-900 "
            >
              <div className="text-lg font-semibold bg-trueGray-300">
                {name}
              </div>
              <div>{description}</div>
            </div>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default Home
