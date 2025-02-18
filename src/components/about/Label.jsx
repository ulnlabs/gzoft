import { FaAngellist } from "react-icons/fa"; 
import React from 'react'

const Label = ({text}) => {
  return (
    <div className='bg-white/10 w-fit p-2 border rounded-full  flex items-center' >
        <FaAngellist className="text-primary text-xl " />
      <p className='text-white px-2 font-satoshi '>{text}</p>
    </div>
  )
}

export default Label
