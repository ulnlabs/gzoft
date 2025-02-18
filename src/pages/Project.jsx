import React from 'react'
import Projects from '../components/common/Projects'
import {motion} from "framer-motion"

function Project() {
  const data=[
    {
      Image: [
        "/carosalimages/about.jpg",
        "/carosalimages/exp-service.avif",
        "/carosalimages/person2.jpg",
      ],
      Title: "content-writing-for-video-grapher",
      Description: "Stellar Shots Videography is a boutique videography studio specializing in capturing memorable moments through cinematic storytelling."
    },
    {
      Image: [
        "/carosalimages/p1.jpg",
        "/carosalimages/p2.jpg",
        "/carosalimages/p3.jpg",
      ],
      Title: "content-writing",
      Description: "capturing memorable moments through cinematic storytelling."
    },
    

   
  ]
  return (
    <div className='min-h-screen p-8 container mx-auto'>
        <motion.div
        initial={{
          opacity: 0,
          y: -100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: 0.5,
        }}
         className=" pt-[8rem] text-5xl text-center ">
          <div className="">
          <h1 className='text-white'>
          Check Our Works With
          <span className=' block'>Real Results</span> 
          </h1>
          </div>
        </motion.div>
        <Projects data={data} />
       
       

        
      
    </div>
  );
}

export default Project;
