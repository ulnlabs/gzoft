import React from 'react';

const Hero = () => {
    return (
        <div className='relative w-full h-[30vh] md:h-[40vh] lg:h-[50vh] rounded-4xl overflow-hidden'>
            <img 
                src="/images/about.jpg" 
                alt="About" 
                className='w-full h-full object-cover'
            />
            <div className='bg-gradient-to-t absolute bottom-0 p-10 font-extrabold sm:text-xl w-screen text-center text-primary  z-40 from-black to-transparent'>
                Hey There! Welcome to G-ZOFT !
            </div>
        </div>
    );
}

export default Hero;