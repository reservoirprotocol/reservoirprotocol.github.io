import React from 'react'
import styles from './Examples.module.css'

const examples = [
  {
    name: 'Levee',
    description:
      'Building NFT liquidity through collection-wide and attribute bidding',
    href: 'https://levee.bid/',
  },
  {
    name: 'Loot Exchange',
    description:
      'A Loot community marketplace with 0% marketplace fees and community royalties. The adventure awaits',
    href: 'https://www.loot.exchange/',
  },
  {
    name: 'Floor Finder',
    description:
      'Easy-to-use tool that helps you track floor prices and depth across multiple collections and attributes',
    href: 'https://www.floorfinder.xyz/',
  },
  {
    name: 'ENS Cafe',
    description: 'Community marketplace for buying and selling ENS domains',
    href: 'https://www.ens.cafe/',
  },
]

const Examples = () => {
  return (
    <div className={styles.grid}>
      {examples.map(({ name, description, href }) => (
        <a href={href} key={name} className={styles.card}>
          <div className={styles.title}>{name}</div>
          <div className={styles.description}>{description}</div>
        </a>
      ))}
    </div>
  )
}

export default Examples
