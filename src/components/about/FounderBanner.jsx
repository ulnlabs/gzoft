import React from 'react'

const FounderBanner = () => {
    return (


        <div className="relative flex xl:w-full pt-20 xl:items-center justify-center items-center flex-col ">
            <div className="relative xl:p-6 text-center flex justify-center overflow-hidden">
                <div className="absolute  bottom-22 mx-auto  h-[400px] xl:w-[400px] px-5 md:w-[420px] w-full md:h-[440px] xl:h-[420px] bg-primary rounded-tl-full rounded-tr-full"></div>
                <div className="bg-gradient-to-t absolute bottom-0 w-full md:bottom-0 xl:bottom-10 h-60 -ml-1 md:w-[440px] xl:w-[420px]  z-40 from-black to-transparent"></div>
                <div className="bg-gradient-to-t absolute bottom-4 w-full md:bottom-0 xl:bottom-6 h-60 -ml-1 md:w-[440px] xl:w-[420px]  z-40 from-black to-transparent"></div>
                <div className="relative flex bottom-16 justify-center z-2 h-[500px] xl:w-[380px] md:w-[400px] md:h-[600px] xl:h-[550px] saturate-0 overflow-hidden">
                    <img src="/images/Founder.png" alt="Founder Image" className="w-full h-full" />
                </div>
            </div>
                <h2 className="absolute left-3 bg-black uppercase xl:bottom-5 md:bottom-0 z-50  text-4xl leading-10 font-bold">
                    <span className="text-primary">Sylvia </span>
                    <span className="block text-white ">Charley</span>
                </h2>
        </div>

    )
}

export default FounderBanner
