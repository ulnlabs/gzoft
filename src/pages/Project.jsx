import React from 'react'
import Projects from '../components/common/Projects'
import Footer from "../components/common/Footer"
import Carsoal from "../components/common/Carosal"
function Project() {
  const data=[
    {
      Image: "https://framerusercontent.com/images/UDxttKeT0c9Ju6za1EBtNrrx9jU.jpg",
      Title: "content-writing-for-video-grapher",
      Description: "Stellar Shots Videography is a boutique videography studio specializing in capturing memorable moments through cinematic storytelling."
    },
    {
      Image: "https://framerusercontent.com/images/VPcvml1LaZgRyGeHDUUSSplRKw.jpg?lossless=1",
      Title: "video-editing-services",
      Description: "Expert video editing services to transform raw footage into stunning cinematic stories."
    }
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
