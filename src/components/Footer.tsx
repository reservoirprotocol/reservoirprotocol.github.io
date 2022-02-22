import React from 'react'

const Footer = () => {
  return (
    <div className="w-full pb-20 md:block">
      <nav className="grid max-w-screen-lg gap-10 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">
        {links.map((col) => (
          <div key={col.title}>
            <div className="mb-8 text-xl font-bold text-white">{col.title}</div>
            <div className="grid gap-6">
              {col.items.map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="text-[#9599A7] hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </nav>
    </div>
  )
}

export default Footer

const links = [
  {
    title: 'Developers',
    items: [
      {
        label: 'Docs',
        href: '/docs/protocol/intro',
      },
      {
        label: 'Github',
        href: 'https://github.com/reservoirprotocol/reservoir-docs',
      },
    ],
  },
  {
    title: 'Built on Reservoir',
    items: [
      {
        label: 'Levee',
        href: 'https://levee.bid/',
      },
      {
        label: 'Loot Exchange',
        href: 'https://www.loot.exchange/',
      },
      {
        label: 'Floor Finder',
        href: 'https://www.floorfinder.xyz/',
      },
    ],
  },
  {
    title: 'Community',
    items: [
      {
        label: 'Discord',
        href: 'https://discord.gg/j5K9fESNwh',
      },
      {
        label: 'Twitter',
        href: 'https://twitter.com/reservoir0x',
      },
      {
        label: 'Blog',
        href: 'https://reservoir.mirror.xyz/',
      },
    ],
  },
]
