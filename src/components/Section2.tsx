import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Section2 = () => {
  return (
    <motion.div
      className="mx-auto mb-40 flex max-w-screen-xl flex-col-reverse place-items-center gap-14 px-4 md:mb-56 md:grid md:grid-cols-2 md:gap-28 lg:px-2"
      initial={{ x: '-50' }}
      whileInView={{ x: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div>
        <img
          className="mb-1.5 block rounded-2xl"
          src="/home/Floor_Finder.webp"
          width="1416"
          height="1110"
          alt="Screenshot of loot.exchange"
        />
        <a
          target="_blank"
          className="text-sm opacity-70"
          href="https://www.floorfinder.xyz/"
        >
          @Floor Finder
        </a>
      </div>
      <div>
        <div className="mb-6 text-4xl font-bold">
          Access open market &amp; pricing data
        </div>
        <div className="mb-12 text-lg text-[#EDEDED]">
          Gain unappreciated access to market and pricing data, opening up a new
          world of possibilities.
        </div>
        <a
          className="inline-flex items-center gap-2 rounded-lg bg-[#060606] px-9 py-4 font-bold hover:text-white hover:no-underline "
          href="/docs/api/overview"
        >
          Learn More
          <HiArrowRight className="flex-none" />
        </a>
      </div>
    </motion.div>
  )
}

export default Section2
