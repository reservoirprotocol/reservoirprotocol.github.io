import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const Section3 = () => {
  return (
    <div className="mb-56 grid items-center gap-28 md:grid-cols-2">
      <div>
        <div className="mb-6 text-4xl font-bold">
          Collection &amp; trait-wide bids
        </div>
        <div className="mb-12 text-lg">
          Finding a great deals has never been easier with Reservoir's
          collection and trait-wide bids.
        </div>
        <a
          className="inline-flex items-center gap-2 rounded-lg bg-[#060606] px-9 py-4 font-bold"
          href="https://levee.bid/"
        >
          Try It Out
          <HiArrowRight className="flex-none" />
        </a>
      </div>
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-white/20"></div>
        <img
          className="relative top-7 left-7"
          src="/home/levee.png"
          width="672"
          height="522"
          alt="Screenshot of loot.exchange"
        />
      </div>
    </div>
  )
}

export default Section3
