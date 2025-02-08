import React from 'react'
import Projects from '../components/common/Projects'
import Footer from "../components/common/Footer"
import Carsoal from "../components/common/Carosal"
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
      Title: "content-writing-for-video-grapher",
      Description: "Stellar Shots Videography is a boutique videography studio specializing in capturing memorable moments through cinematic storytelling."
    },
    

   
  ]
  return (
    <div className='min-h-screen p-8 container mx-auto'>
        <div className=" pt-[8rem] text-5xl text-center ">
          <div className="">
          <h1 className='text-white'>
          Check Our Works With
          <span className=' block'>Real Results</span> 
          </h1>
          </div>
        </div>
        <Projects data={data} />
        <Footer/>
       

        
      
    </div>
  );
}

export default Project;
