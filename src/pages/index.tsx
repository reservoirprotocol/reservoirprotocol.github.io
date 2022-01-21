import React from 'react'
import Layout from '@theme/Layout'
import HomepageFeatures from '../components/HomepageFeatures'

export default function Home(): JSX.Element {
  return (
    <Layout title="Reservoir Docs" description="Reservoir Documentation">
      <main style={{ paddingTop: '30px', paddingBottom: '30px' }}>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
