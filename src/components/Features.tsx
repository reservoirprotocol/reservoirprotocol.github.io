import React from 'react'

const Features = () => {
  return (
    <div className="mb-36 md:mb-60">
      <div className="mb-16">
        <div className="mb-6 text-center text-4xl font-bold">
          Reservoir Protocol
        </div>
        <div className="mx-auto max-w-3xl text-center text-lg font-light">
          The Reservoir protocol is a decentralized NFT order book designed to
          grow NFT Liquidity. It has many pieces, which all come together to
          form a comprehensive liquidity toolkit.
        </div>
      </div>
      <img
        className="mx-auto"
        src="/home/reservoir-diagram.webp"
        alt="Reservoir protocol overview"
        width="2406"
        height="896"
      />
    </div>
  )
}

export default Features
