import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

const Code = () => {
  return (
    <div>
      <div className="mb-6 text-center text-4xl font-bold">
        Powerful suite of developer tools
      </div>
      <div className="mx-auto mb-16 max-w-3xl text-center">
        Save time + cost of building your own back-end infrastructure and use
        our fully managed, infinitely scalable enterprise-grade infrastructure —
        with one snippet of code.
      </div>
      <img
        className="mx-auto mb-20"
        src="/home/api.png"
        width="793"
        height="534"
        alt="API query from Reservoir Protocol"
      />
      <div className="grid items-center">
        <a
          className="mx-auto mb-24 inline-flex items-center gap-2 rounded-lg py-4 px-7 font-bold text-white no-underline lg:py-5 lg:px-8 lg:text-lg"
          style={{
            background:
              'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)',
          }}
          href="/docs/api/overview"
        >
          View the API docs
          <HiArrowRight />
        </a>
      </div>
    </div>
  )
}

export default Code
