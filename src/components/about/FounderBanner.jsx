import React from 'react'

const FounderBanner = () => {
    return (


        <div className="relative flex xl:w-full pt-20 xl:items-center md:justify-around xl:justify-center">
            <div className="relative xl:p-6 text-center">
                <div className="absolute  bottom-22 mx-auto xl:w-[400px] px-5 md:w-[420px] md:h-[440px] xl:h-[420px] bg-primary rounded-tl-full rounded-tr-full"></div>
                <div className="bg-gradient-to-t absolute md:bottom-14 xl:bottom-19 h-60 -ml-1 md:w-[440px] xl:w-[420px]  z-40 from-black to-transparent"></div>
                <div className="bg-gradient-to-t absolute md:bottom-14 xl:bottom-19 h-60 -ml-1 md:w-[440px] xl:w-[420px]z`  z-40 from-black to-transparent"></div>
                <div className="relative left-2 z-30 xl:w-[380px] md:w-[400px] md:h-[600px] xl:h-[550px] saturate-0 overflow-hidden">
                    <img src="/images/Founder.png" alt="Founder Image" className="w-full h-full" />
                </div>
                <h2 className="absolute bg-black xl:bottom-3 md:bottom-0 z-50 text-5xl leading-10 font-bold">
                    <span className="text-primary">FIRST NAME</span>
                    <span className="block text-white">LAST NAME</span>
                </h2>
            </div>
        </div>

    )
}

export default FounderBanner
