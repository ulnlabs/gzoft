import React from "react";
import Heading from "../components/about/Heading";
import Acordian from "../components/common/Acordian"
import Hero from "../components/about/Hero";
function About() {
  return <div className="pt-[8rem] px-10">
    <div>
      <Hero />
    </div>
    <div>
    <Heading />

    <div className="grid grid-cols-12 pt-10 items-start">
      <p className='text-white text-2xl h-full font-satoshi col-start-1 lg:col-span-8 col-span-full  '  >Let's get acquainted! We're not your average digital marketing agency - we're a team of passionate individuals who eat, sleep, and breathe creativity, innovation, and all things digital. At Celestial Solutions, we're on a mission to make your online dreams come true, one pixel at a time! We're a bunch of tech-savvy wizards, design enthusiasts, and social media mavens who believe that digital marketing should be fun, exciting, and downright awesome.</p>
      <div className="col-end-13 lg:col-span-4 col-span-full ">
        <Acordian data={[
          { question: "What are the key factors that influence SEO rankings?", answer: "Key factors include keyword optimization, high-quality content, backlinks, mobile-friendliness, page speed, and user experience." },
          { question: "Do I need to hire an SEO agency, or can I do SEO myself?", answer: "You can do SEO yourself with proper learning, but hiring an agency can save time and provide expertise to improve results faster." },
          { question: "Is SEO a one-time effort, or does it require ongoing maintenance?", answer: "SEO requires ongoing maintenance to adapt to search engine updates, competition, and changing user behaviors." }
        ]} />
      </div>

    </div>
    </div>

  </div>;
}

export default About;
