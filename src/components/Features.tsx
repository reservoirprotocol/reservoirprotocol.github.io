import styles from './Features.module.css'
import React from 'react'

const features = [
  {
    name: 'Composable',
    description:
      'Quickly build marketplaces with aggregated liquidity and custom fees.',
    url: {
      title: 'Read this guide',
      href: '#',
    },
    icon: '/icons/Composable.svg',
  },
  {
    name: 'Liquid',
    description:
      'Tap into instant sell liquidity powered by collection and trait-wide bids.',
    url: {
      title: 'Try it out',
      href: '#',
    },
    icon: '/icons/Liquid.svg',
  },
  {
    name: 'Scalable',
    description: 'Rerum nam aliquam itaque iusto. Ut officia quia tenetu',
    url: {
      title: 'View docs',
      href: '#',
    },
    icon: '/icons/Scalable.svg',
  },
  {
    name: 'Open',
    description: 'Rerum nam aliquam itaque iusto. Ut officia quia tenetu',
    url: {
      title: 'How it works',
      href: '#',
    },
    icon: '/icons/Open.svg',
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
