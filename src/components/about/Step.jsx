import React from 'react'
import Number from "./Number"
import Card from './Card'
const Step = ({ number, stage, description, line }) => {
    return (
        <div className='flex gap-14 justify-center items-start'>
            <Number number={number} line={line} />
            <Card title={`STEP ${number}`} heading={stage} description={description} />
        </div>
    )
}

export default Step