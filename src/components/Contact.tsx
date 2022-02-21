import React from 'react'

const Contact = () => {
  return (
    <div className="mx-auto flex items-center justify-between gap-4 pb-60">
      <div className="max-w-2xl text-4xl font-bold">
        Ready to get started? Read our docs or contact us directly
      </div>

      <div className="flex items-center gap-4">
        <a
          className="inline-flex items-center gap-2 rounded-lg px-9 py-4 font-bold"
          style={{
            background:
              'linear-gradient(92.88deg, rgb(69, 94, 181) 9.16%, rgb(86, 67, 204) 43.89%, rgb(103, 63, 215) 64.72%)',
          }}
          href="#"
        >
          View Docs
        </a>
        <a
          className="inline-flex items-center gap-2 rounded-lg bg-[#060606] px-9 py-4 font-bold"
          href="#"
        >
          Contact Us
        </a>
      </div>
    </div>
  )
}

export default Contact
