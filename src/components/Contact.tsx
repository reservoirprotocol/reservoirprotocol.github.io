import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const Contact = () => {
  return (
    <div className="mx-auto grid items-center justify-between gap-4 pb-32 md:flex">
      <div className="mb-9 max-w-2xl text-4xl font-bold md:mb-0">
        Ready to get started? Read our docs or contact us directly
      </div>
      <div className="flex items-center gap-4">
        <a
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-gradient-to-r from-[#BD00FF] to-[#7000FF] px-9 py-4 font-bold hover:no-underline"
          href="/docs/protocol/intro"
        >
          View Docs
          <HiArrowRight className="flex-none" />
        </a>
        <a
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-[#060606] px-9 py-4 font-bold hover:no-underline"
          href="https://discord.gg/j5K9fESNwh"
        >
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default Contact
