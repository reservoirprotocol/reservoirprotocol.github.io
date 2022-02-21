import React from 'react'

const features = [
  {
    name: 'Open',
    description: 'Permissionless order book with no centralized gatekeeper',
    url: {
      title: 'How it works',
      href: '/docs/protocol/intro',
    },
    icon: '/icons/Open.svg',
  },
  {
    name: 'Scalable',
    description:
      'Powerful API that gives granular access to pricing data without limits',
    url: {
      title: 'View docs',
      href: '/docs/api/overview',
    },
    icon: '/icons/Scalable.svg',
  },
  {
    name: 'Composable',
    description:
      'Quickly build a marketplace with aggregated liquidity and custom fees',
    url: {
      title: 'Read this guide',
      href: '/docs/api/guides/community-marketplace',
    },
    icon: '/icons/Composable.svg',
  },
  {
    name: 'Liquid',
    description:
      'Tap into instant sell liquidity powered by collection and trait-wide bids',
    url: {
      title: 'Try it out',
      href: 'https://levee.bid/',
    },
    icon: '/icons/Liquid.svg',
  },
]

const Features = () => {
  return (
    <div className="mb-60">
      <div className="mb-16">
        <div className="mb-6 text-center text-4xl font-bold">
          Reservoir Protocol
        </div>
        <div className="mx-auto max-w-3xl text-center text-lg">
          The Reservoir protocol is a decentralized NFT order book designed to
          grow NFT Liquidity. It has many pieces, which all come together to
          form a comprehensive liquidity toolkit.
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {features.map(({ name, description, url, icon }) => (
          <div key={name} className="rounded-lg bg-[#1A1A1A] p-8">
            <img src={icon} className="mb-5 h-9 w-9 invert" />
            <div className="mb-4 text-xl font-bold">{name}</div>
            <div className="">{description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
