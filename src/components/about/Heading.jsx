import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Heading = ({ title, heading }) => {
  const thisRef = useRef(null)
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      gsap.fromTo(
        thisRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 }
      );
    });

    mm.add("(max-width: 1023px)", () => {
      gsap.fromTo(
        thisRef.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          scrollTrigger: {
            trigger: thisRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <div ref={thisRef} className='flex flex-wrap flex-col xl:flex-row justify-center xl:justify-start items-center  pt-[5rem] gap-5'>
      <Title text={title} />
      <h2 className='text-white text-3xl md:text-4xl font-satoshi font-bold ' >{heading}</h2>
    </div>
  )
}

export const Title = ({ text , className}) => {

  const thisRef = useRef(null)
  useGSAP(() => {
    gsap.fromTo(
      thisRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: .4,
        scrollTrigger: {
          trigger: thisRef.current,
          start: 'top 90%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [])
  console.log(className)
  return <h1 ref={thisRef} className={`${className} text-primary  w-fit rounded-full px-4 text-xs font-satoshi font-bold bg-white/10 p-2`}>{text}</h1>
}

export const InnerHeading = ({ title, heading }) => {
  const thisRef = useRef(null)
  useGSAP(() => {
    gsap.fromTo(
      thisRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: .4,
        scrollTrigger: {
          trigger: thisRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, [])

  return <div ref={thisRef} className='grid gap-5 place-items-center text-center w-[70%] mx-auto '>
    <Title text={title} />
    <h2 className='text-white text-3xl md:text-4xl ' >{heading}</h2>
  </div>
}

export default Heading
