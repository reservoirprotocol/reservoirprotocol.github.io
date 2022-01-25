import styles from './Features.module.css'
import React from 'react'

const features = [
  {
    name: 'Open',
    description: 'Permissionless order book with no centralized gatekeeper',
    url: {
      title: 'How it works',
      href: '/docs/intro',
    },
    icon: '/icons/Open.svg',
  },
  {
    name: 'Scalable',
    description:
      'Powerful API that gives granular access to pricing data without limits',
    url: {
      title: 'View docs',
      href: '/docs/core-components/API',
    },
    icon: '/icons/Scalable.svg',
  },
  {
    name: 'Composable',
    description:
      'Quickly build a marketplace with aggregated liquidity and custom fees',
    url: {
      title: 'Read this guide',
      href: '/docs/guides/community-marketplace',
    },
    icon: '/icons/Composable.svg',
  },
  {
    name: 'Liquid',
    description:
      'Tap into instant sell liquidity powered by collection and trait-wide bids',
    url: {
      title: 'Try it out',
      href: '#builtOnReservoir',
    },
    icon: '/icons/Liquid.svg',
  },
]

const Features = () => {
  return (
    <div className={styles.grid}>
      {features.map(({ name, description, url, icon }) => (
        <div key={name} className={styles.card}>
          <img src={icon} className={styles.icon} />
          <div className={styles.title}>{name}</div>
          <div className={styles.description}>{description}</div>
          <a href={url.href} className={styles.anchor}>
            {url.title}
          </a>
        </div>
      ))}
    </div>
  )
}

export default Features
