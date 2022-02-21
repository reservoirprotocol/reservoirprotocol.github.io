import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const Section2 = () => {
  return (
    <div className="mb-56 grid place-items-center gap-28 md:grid-cols-2">
      <div className="relative">
        <div className="absolute inset-0 rounded-2xl bg-white/20"></div>
        <img
          className="relative top-7 right-7"
          src="/home/floor-finder.png"
          width="640"
          height="450"
          alt="Screenshot of loot.exchange"
        />
      </div>
      <div>
        <div className="mb-6 text-4xl font-bold">
          Access open market &amp; pricing data
        </div>
        <div className="mb-12 text-lg">
          Gain unappreciated access to market and pricing data, opening up a new
          world of possibilities.
        </div>
        <a
          className="inline-flex items-center gap-2 rounded-lg bg-[#060606] px-9 py-4 font-bold"
          href="#"
        >
          Learn More
          <HiArrowRight className="flex-none" />
        </a>
      </div>
    </div>
  )
}

export default Section2
