import React from 'react'

const links = [
  {
    href: '/docs/protocol/intro',
    label: 'Docs',
  },
  {
    href: '/docs/api/overview',
    label: 'API',
  },
  {
    href: 'https://github.com/reservoirprotocol',
    label: 'GitHub',
  },
  {
    href: 'https://reservoir.mirror.xyz/',
    label: 'Blog',
  },
  {
    href: 'https://discord.gg/j5K9fESNwh',
    label: 'Discord',
  },
  {
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdetWgU3dK_NWfIVvN0UpZjj85ifjQVUkRGOcssHwPAgzSzkw/viewform?usp=sf_link',
    label: 'Jobs',
  },
]

const Navbar = () => {
  return (
    <div className="fixed top-0 z-[9999] hidden  w-full bg-black md:block">
      <nav className="relative mx-auto flex h-[70px] max-w-screen-xl items-center justify-center px-6 ">
        <div className="absolute left-3 inline-flex items-center gap-2">
          <img
            src="img/reservoir.svg"
            alt="Reservoir Logo"
            className="h-6 w-6"
          />
          <div className="font-[Obvia] text-2xl font-bold">reservoir</div>
        </div>
        <div>
          {links.map(({ href, label }) => (
            <a className="mx-4" key={label} href={href}>
              {label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
