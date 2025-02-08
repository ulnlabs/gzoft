import React from 'react'

const FounderBanner = () => {
    return (


        <div className="relative flex xl:w-full pt-20 xl:items-center justify-center items-center flex-col ">
            <div className="relative xl:p-6 text-center">
                <div className="absolute  bottom-22 mx-auto w-[380px] h-[400px] xl:w-[400px] px-5 md:w-[420px] md:h-[440px] xl:h-[420px] bg-primary rounded-tl-full rounded-tr-full"></div>
                <div className="bg-gradient-to-t absolute bottom-0 w-[400px] md:bottom-0 xl:bottom-0 h-60 -ml-1 md:w-[440px] xl:w-[420px]  z-40 from-black to-transparent"></div>
                <div className="bg-gradient-to-t absolute bottom-4 w-[400px] md:bottom-0 xl:bottom-4 h-60 -ml-1 md:w-[440px] xl:w-[420px]  z-40 from-black to-transparent"></div>
                <div className="relative flex justify-center left-2 z-2  h-[500px] xl:w-[380px] md:w-[400px] md:h-[600px] xl:h-[550px] saturate-0 overflow-hidden">
                    <img src="/images/Founder.png" alt="Founder Image" className="w-full h-full" />
                </div>
            </div>
                <h2 className=" bg-black xl:bottom-3 md:bottom-0 z-50 text-4xl leading-10 font-bold">
                    <span className="text-primary">FIRST NAME</span>
                    <span className="block text-white">LAST NAME</span>
                </h2>
        </div>

    )
}

export default FounderBanner
