import React from "react";
import Heading, { InnerHeading } from "../components/about/Heading";
import Acordian from "../components/common/Acordian";
import Brands from "../components/common/Brands";
import Hero from "../components/about/Hero";
import Label from "../components/about/Label";
import FounderBanner from "../components/about/FounderBanner";

const highLights = [
  { text: "Visionary Thinking" },
  { text: "Empathetic Leader" },
  { text: "Creative Problem-Solver" },
  { text: "Passionate Mentor" },
]
function About() {
  return <div className="pt-[8rem] px-10">
    <div>
      <Hero />
    </div>
    <div className="container mx-auto">
      <div >

        <Heading heading={"About Our Company"} title={"WHO WE ARE"} />

        <div className="flex gap-20 xl:flex-row flex-col w-full pt-10 items-start ">
          <p className='text-white text-3xl h-full font-satoshi w-full leading-tight '>Let's get acquainted! We're not your average digital marketing agency - we're a team of passionate individuals who eat, sleep, and breathe creativity, innovation, and all things digital. At Celestial Solutions, we're on a mission to make your online dreams come true, one pixel at a time! We're a bunch of tech-savvy wizards, design enthusiasts, and social media mavens who believe that digital marketing should be fun, exciting, and downright awesome.</p>
          <div className=" ">
            <Acordian data={[
              { question: "01. Our History", answer: "Key factors include keyword optimization, high-quality content, backlinks, mobile-friendliness, page speed, and user experience." },
              { question: "02. Our Mission", answer: "You can do SEO yourself with proper learning, but hiring an agency can save time and provide expertise to improve results faster." },
              { question: "03. Our Vision", answer: "SEO requires ongoing maintenance to adapt to search engine updates, competition, and changing user behaviors." }
            ]} />
          </div>

        </div>
      </div>
      <div>
        <div className="grid gap-10 justify-center pt-28">
          <InnerHeading title={"Brand"} heading="Brands we have have worked with" />
          <Brands />
        </div>
      </div>
      <div className="pt-36 scale-110 w-full">
        <Heading heading="Meet The Founder" title="ABOUT FOUNDER" />
        <p className="pt-20 text-2xl font-satoshi ">
          James Andrews, the heart of Celestial Solutions. With a decade of digital marketing expertise, James's passion for innovation and dedication to clients have guided our journey. His strategic vision, client-centered approach, and knack for creative solutions shape our commitment to excellence.
        </p>

        <div className="grid grid-cols-12  items-start">
          <div className="col-start-3 col-span-2 " >
            <FounderBanner />
          </div>
          <div className="col-end-11 col-span-5 pt-5 ">

            <p className="font-satoshi text-lg">
              J. Andrews, the driving force behind Celestial Solutions. With over a decade of experience in digital marketing, James's passion for innovation and dedication to client success have been the cornerstone of our agency's growth. His strategic vision and hands-on approach have propelled us to the forefront of the industry, while his commitment to transparency and integrity sets the tone for our team. As a respected leader and mentor, James inspires us to exceed expectations and deliver exceptional results for our clients every day.
            </p>
            <div className="pt-10 gap-4 flex flex-wrap w-[80%] ">
              { 
                highLights.map(({text}, index) => (
                  <Label key={index} text={text} />
                ))
              }
            </div>
            <div>
              <h2>Featured In:</h2>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default About;
