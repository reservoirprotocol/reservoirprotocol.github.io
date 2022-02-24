import React from 'react'
import { HiArrowRight } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Section3 = () => {
  return (
    <motion.div
      className="mx-auto mb-40 grid max-w-screen-xl items-center gap-14 px-4 md:mb-56 md:grid-cols-2 md:gap-28 lg:px-2"
      initial={{ x: '50' }}
      whileInView={{ x: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div>
        <div className="mb-6 text-4xl font-bold">
          Collection &amp; trait-wide bids
        </div>
        <div className="mb-12 text-lg text-[#EDEDED]">
          Finding a great deals has never been easier with Reservoir's
          collection and trait-wide bids.
        </div>
        <a
          className="inline-flex items-center gap-2 rounded-lg bg-[#060606] px-11 py-4 font-bold hover:text-white hover:no-underline "
          href="/docs/api/overview"
        >
          Try It Out
          <HiArrowRight className="flex-none" />
        </a>
      </div>
      <div>
        <img
          className="block rounded-2xl"
          src="/home/Levee.webp"
          width="1416"
          height="1110"
          alt="Screenshot of loot.exchange"
        />
        <a
          target="_blank"
          className="flex justify-end text-sm opacity-70"
          href="https://levee.bid/"
        >
          @Levee
        </a>
      </div>
    </motion.div>
  )
}

export default Section3
