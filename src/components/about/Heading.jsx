import React from 'react'

const Heading = () => {
  return (
      <div className='flex items-center gap-5'>
        <Title text = "WHO WE ARE" />
        <h2 className='text-white text-5xl font-satoshi font-bold ' >About Our Company</h2>
    </div>
  )
}

export const Title =({text}) =>(
  <h1 className='text-primary w-fit rounded-full px-4 text-xs font-satoshi font-bold bg-white/10 p-2'>{text}</h1>
)

export default Heading