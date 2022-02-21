import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const Section2 = () => {
  return (
    <div className="mb-40 flex flex-col-reverse place-items-center gap-14 md:mb-56 md:grid md:grid-cols-2 md:gap-28">
      <div>
        <div className="relative mb-1 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 rounded-2xl bg-white/20"></div>
          <img
            className="relative top-7 right-7 rounded-2xl"
            src="/home/floor-finder.png"
            width="640"
            height="450"
            alt="Screenshot of loot.exchange"
          />
        </div>
        <a
          target="_blank"
          className="flex justify-end"
          href="https://www.floorfinder.xyz/"
        >
          @Floor Finder
        </a>
      </div>
      <div>
        <div className="mb-6 text-4xl font-bold">
          Access open market &amp; pricing data
        </div>
        <div className="mb-12 text-lg font-light">
          Gain unappreciated access to market and pricing data, opening up a new
          world of possibilities.
        </div>
        <a
          className="inline-flex items-center gap-2 rounded-lg bg-[#060606] px-9 py-4 font-bold hover:no-underline"
          href="/docs/api/overview"
        >
          Learn More
          <HiArrowRight className="flex-none" />
        </a>
      </div>
    </div>
  )
}

export default Section2
