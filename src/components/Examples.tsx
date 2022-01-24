import React from 'react'
import styles from './Examples.module.css'

const examples = [
  {
    name: 'Leeve',
    description: 'Rerum nam aliquam itaque iusto. Ut officia quia tenetu',
  },
  {
    name: 'Instant Capital',
    description: 'Rerum nam aliquam itaque iusto. Ut officia quia tenetu',
  },
  {
    name: 'ENS Cafe',
    description: 'Rerum nam aliquam itaque iusto. Ut officia quia tenetu',
  },
  {
    name: 'Hack The Floor',
    description: 'Rerum nam aliquam itaque iusto. Ut officia quia tenetu',
  },
]

const Examples = () => {
  return (
    <div className={styles.grid}>
      {examples.map(({ name, description }) => (
        <div key={name} className={styles.card}>
          <div className={styles.title}>{name}</div>
          <div className={styles.description}>{description}</div>
        </div>
      ))}
    </div>
  )
}

export default Examples
