import React from 'react'

const examples = [
  {
    name: 'Levee',
    type: 'Collection-wide Bids',
    logo: '/home/levee-logo.png',
    description:
      'Building NFT liquidity through collection-wide and attribute bidding',
    href: 'https://levee.bid/',
    bg: {
      backgroundImage: 'linear-gradient(#202060, #1b1b1b)',
    },
  },
  {
    name: 'Loot Exchange',
    type: 'Community Marketplace',
    logo: '/home/loot-exchange-logo.png',
    description:
      'A Loot community marketplace with 0% marketplace fees and community royalties. The adventure awaits',
    href: 'https://www.loot.exchange/',
    bg: {
      backgroundImage: 'linear-gradient(#2a4c6b, #1b1b1b)',
    },
  },
  {
    name: 'Floor Finder',
    type: 'Find Great Deals',
    logo: '/home/floor-finder-logo.png',
    description:
      'Easy-to-use tool that helps you track floor prices and depth across multiple collections and attributes',
    href: 'https://www.floorfinder.xyz/',
    bg: {
      backgroundImage: 'linear-gradient(#3a2568, #1b1b1b)',
    },
  },
  {
    name: 'reservoir.market',
    type: 'Community Marketplace',
    logo: '/home/reservoir-market-logo.png',
    description: '',
    href: 'https://www.reservoir.market/',
    bg: {
      backgroundImage: 'linear-gradient(#4b1863, #1b1b1b)',
    },
  },
]

const Examples = () => {
  return (
    <div className="mb-40 md:mb-72">
      <div className="mb-14">
        <div className="mb-6 text-center text-4xl font-bold">
          Built on Reservoir
        </div>
        {/* <div className="mx-auto max-w-3xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum
          arcu molestie integer mauris sollicitudin. Aliquam turpis parturient
          elit phasellus vel id nibh vestibulum.
        </div> */}
      </div>
      <div className="mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="grid items-center rounded-2xl bg-gradient-to-br from-[#70D3FF] to-[#7000FF] p-8 text-2xl font-bold">
          Ideal for all kinds of products. Such as...
        </div>
        {examples.map(({ name, description, href, type, logo, bg }) => (
          <a
            style={bg}
            href={href}
            className="rounded-2xl p-8 hover:no-underline"
          >
            {logo && <img className="mx-auto mb-12 block" src={logo} />}
            <div className="mb-1 font-semibold">{type}</div>
            <div className="mb-4 text-xl font-bold">{name}</div>
            <div className="text-lg">{description}</div>
          </a>
        ))}
        <div className="grid items-center rounded-2xl  bg-[#060606] p-8 text-2xl font-bold">
          and many more...
        </div>
      </div>
    </div>
  )
}

export default Examples
