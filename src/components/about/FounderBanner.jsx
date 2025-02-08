import React from 'react'

const FounderBanner = () => {
    return (

        <div className="mb-40 ">
            <div className="relative flex items-center justify-center">
                <div className="relative p-6 text-center">
                    <div className="bg-gradient-to-t absolute bottom-20 h-60 -ml-1 w-[450px]  z-20 from-black to-transparent"></div>
                    <div className="absolute  bottom-22 mx-auto w-[400px] px-5 h-[420px] bg-primary rounded-tl-full rounded-tr-full"></div>
                    <div className="relative left-2 z-10 w-[380px] h-[550px] saturate-0 overflow-hidden">
                        <img src="/images/Founder.png" alt="Founder Image" className="w-full h-full" />
                    </div>
                    <h2 className="absolute bg-black bottom-1 z-50 text-5xl leading-10 font-bold">
                        <span className="text-primary">FIRST NAME</span>
                        <span className="block text-white">LAST NAME</span>
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default FounderBanner
