import { div } from 'framer-motion/client'
import React from 'react'

const Heading = ({ title, heading }) => {
  return (
    <div className='flex items-center pt-[5rem] gap-5'>
      <Title text={title} />
      <h2 className='text-white text-5xl font-satoshi font-bold ' >{heading}</h2>
    </div>
  )
}

export const Title = ({ text }) => (
  <h1 className='text-primary w-fit rounded-full px-4 text-xs font-satoshi font-bold bg-white/10 p-2'>{text}</h1>
)

export const InnerHeading = ({ title, heading }) => (
  <div className='grid gap-5 place-items-center text-center w-[70%] mx-auto'>
    <Title text={title} />
    <h2 className='text-white text-4xl ' >{heading}</h2>
  </div>
)

export default Heading
