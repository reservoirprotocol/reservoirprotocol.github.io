import React from 'react'

const examples = [
  {
    name: 'Levee',
    type: 'Collection-wide Bids',
    description:
      'Building NFT liquidity through collection-wide and attribute bidding',
    href: 'https://levee.bid/',
  },
  {
    name: 'Loot Exchange',
    type: 'Community Marketplace',
    description:
      'A Loot community marketplace with 0% marketplace fees and community royalties. The adventure awaits',
    href: 'https://www.loot.exchange/',
  },
  {
    name: 'Floor Finder',
    type: 'Find Great Deals',
    description:
      'Easy-to-use tool that helps you track floor prices and depth across multiple collections and attributes',
    href: 'https://www.floorfinder.xyz/',
  },
  {
    name: 'reservoir.market',
    type: 'Community Marketplace',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    href: '#',
  },
]

const Examples = () => {
  return (
    <div className="mb-72">
      <div className="mb-14">
        <div className="mb-6 text-center text-4xl font-bold">
          Built on Reservoir
        </div>
        <div className="mx-auto max-w-3xl text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fermentum
          arcu molestie integer mauris sollicitudin. Aliquam turpis parturient
          elit phasellus vel id nibh vestibulum.
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-3 gap-5">
        <div className="grid items-center rounded-2xl bg-[#1A1A1A] p-8 text-2xl font-bold">
          Ideal for all kinds of products. Such as...
        </div>
        {examples.map(({ name, description, href }) => (
          <a href={href} key={name} className="rounded-2xl bg-[#1A1A1A] p-8">
            <div className="text-xl font-bold">{name}</div>
            <div className="">{description}</div>
          </a>
        ))}
        <div className="grid items-center rounded-2xl  bg-[#1A1A1A] p-8 text-2xl font-bold">
          and many more...
        </div>
      </div>
    </div>
  )
}

export default Examples
