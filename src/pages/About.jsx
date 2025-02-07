import React from "react";
import Heading, { Title } from "../components/about/Heading";
import Acordian from "../components/common/Acordian"
import Hero from "../components/about/Hero";
function About() {
  return <div className="pt-[8rem] px-10">
    <div>
      <Hero />
    </div>
    <div className="container mx-auto"> 
      <div >
        <Heading />

        <div className="flex w-full pt-10 items-start ">
          <p className='text-white text-3xl h-full font-satoshi w-full leading-tight '>Let's get acquainted! We're not your average digital marketing agency - we're a team of passionate individuals who eat, sleep, and breathe creativity, innovation, and all things digital. At Celestial Solutions, we're on a mission to make your online dreams come true, one pixel at a time! We're a bunch of tech-savvy wizards, design enthusiasts, and social media mavens who believe that digital marketing should be fun, exciting, and downright awesome.</p>
          <div className="col-end-13 lg:col-span-5 col-span-full ">
            <Acordian data={[
              { question: "01. Our History", answer: "Key factors include keyword optimization, high-quality content, backlinks, mobile-friendliness, page speed, and user experience." },
              { question: "02. Our Mission", answer: "You can do SEO yourself with proper learning, but hiring an agency can save time and provide expertise to improve results faster." },
              { question: "03. Our Vision", answer: "SEO requires ongoing maintenance to adapt to search engine updates, competition, and changing user behaviors." }
            ]} />
          </div>

        </div>
      </div>
      <div>
        <div className="grid justify-center pt-28">
        <Title text="Brand" />
        <h2>Brands we have have worked with</h2>
        </div>
      </div>
    </div>
  </div>;
}

export default About;
