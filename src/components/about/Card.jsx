import React from 'react'
import { Title } from './Heading'
const card = ({ title, heading, description }) => {
  return (
    <div className='grid gap-2 max-w-[650px] py-8  rounded-4xl bg-white/10 px-10'>
      <Title text={title} />
      <h3 className='text-white md:text-2xl text-xl' >{heading}</h3>
      <p className='text-white/80 font-satoshi max-md:text-sm'>{description} </p>
    </div>
  )
}

export default card