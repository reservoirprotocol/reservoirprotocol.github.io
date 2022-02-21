import React from 'react'

const Faq = () => {
  return (
    <div>
      <div>Frequently asked questions</div>
      <div>
        <details>
          <summary>What is Reservoir?</summary>
          Reservoir is a decentralized NFT order book protocol that enables
          developers and communities to easily build their own marketplaces and
          tools sharing a global pool of liquidity.
        </details>
        <details>
          <summary>
            How do marketplace and royalty fees work with Reservoir?
          </summary>
        </details>
        <details>
          <summary>
            Are there any plans to expand to sidechains/L2s such as Polygon?
          </summary>
        </details>
        <details>
          <summary>
            I am working on a project and would like to use Reservoir. How can I
            get started?
          </summary>
        </details>
        <details>
          <summary>
            I am not a developer, is there any way I can get involved in
            Reservoir?
          </summary>
        </details>
      </div>
    </div>
  )
}

export default Faq
