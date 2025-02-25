import React from 'react'

const FounderBanner = () => {
    return (


        <div className="relative  flex w-full pt-20 xl:items-center justify-center items-center flex-col ">
            <div className="relative xl:p-6 text-center flex justify-center overflow-hidden">
                <div className="absolute bottom-16 xl:bottom-22 mx-auto  md:h-[440px] h-[400px] px-5  w-full  bg-primary rounded-tl-full rounded-tr-full"></div>
                <div className="bg-gradient-to-t absolute bottom-0 w-full md:bottom-0 xl:bottom-10 h-60  z-40 from-black to-transparent"></div>
                <div className="bg-gradient-to-t absolute bottom-4 w-full md:bottom-0 xl:bottom-6 h-60  z-40 from-black to-transparent"></div>
                <div className="relative flex bottom-16 justify-center z-2 md:w-[380px] w-[320px] h-[600px] px-4 md:h-[650px]  saturate-0 overflow-hidden">
                    <img src="/images/Founder.png" width={400} height={600} alt="Founder Image" className="aspect-square" />
                </div>
            </div>
                <h2 className="absolute left-3  uppercase xl:bottom-5 bottom-0 z-50  text-4xl leading-10 font-bold">
                    <span className="text-primary">Sylvia </span>
                    <span className="block text-white  ">Charley</span>
                </h2>
        </div>

    )
}

export default FounderBanner
