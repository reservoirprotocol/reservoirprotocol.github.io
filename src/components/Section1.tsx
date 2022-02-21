import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const Section1 = () => {
  return (
    <div className="mb-40 grid items-center gap-14 md:mb-56 md:grid-cols-2 md:gap-28">
      <div>
        <div className="mb-6 text-4xl font-bold">
          Easiest way to build community marketplaces
        </div>
        <div className="mb-12 text-lg">
          Reservoir&apos;s API and public repositories enable communities to
          easily build their own marketplaces with access to a shared pool of
          liquidity.
        </div>
        <a
          className="inline-flex items-center gap-2 rounded-lg bg-[#060606] px-9 py-4 font-bold hover:no-underline"
          href="https://github.com/reservoirprotocol"
        >
          Visit GitHub
          <HiArrowRight className="flex-none" />
        </a>
      </div>
      <div className="relative overflow-hidden rounded-2xl">
        <div className="absolute inset-0 rounded-2xl bg-white/20"></div>
        <img
          className="relative top-7 left-7 rounded-2xl"
          src="/home/loot-exchange.png"
          width="640"
          height="446"
          alt="Screenshot of loot.exchange"
        />
      </div>
    </div>
  )
}

export default Section1
