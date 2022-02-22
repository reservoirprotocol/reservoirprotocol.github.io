import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const Contact = () => {
  return (
    <div className="mx-auto grid max-w-screen-xl items-center justify-between gap-4 pb-48 md:flex lg:pb-60">
      <div className="mb-9 max-w-2xl text-4xl font-bold md:mb-0">
        Ready to get started?
        <br />
        Read our docs or contact us directly
      </div>
      <div className="grid items-center gap-4 md:flex">
        <a
          className="inline-flex w-min items-center gap-2 whitespace-nowrap rounded-lg bg-gradient-to-r from-[#BD00FF] to-[#7000FF] px-9 py-4 font-bold hover:no-underline"
          href="/docs/protocol/intro"
        >
          View Docs
          <HiArrowRight className="flex-none" />
        </a>
        <a
          className="inline-flex w-min items-center gap-2 whitespace-nowrap rounded-lg bg-[#060606] px-9 py-4 font-bold hover:no-underline"
          href="https://discord.gg/j5K9fESNwh"
        >
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default Contact
