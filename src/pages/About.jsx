import React, { useRef } from "react";
import Heading, { InnerHeading } from "../components/about/Heading";
import Acordian from "../components/common/Acordian";
import Brandings from "../components/common/Brandings";
import Brands from "../components/common/Brands";
import Hero from "../components/about/Hero";
import Label from "../components/about/Label";
import FounderBanner from "../components/about/FounderBanner";
import Step from "../components/about/Step";
import Team from "../components/common/Team"
import FaqSingle from "../components/common/FaqSingle";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function About() {
  return <div className="pt-[8rem] px-10">
    <div >
      <Hero />
    </div>
    <div className="container mx-auto">
      <div className="xl:pt-24 md:pt-14 pt-5" >
        <Heading heading={"About Our Company"} title={"WHO WE ARE"} />
        <div className="flex gap-20 xl:flex-row  flex-col w-full pt-10 items-start ">
          <p className=' text-2xl  xl:text-3xl h-full font-satoshi  f w-full leading-10 text-gray-400'>
            At <span className="text-primary font-semibold"> G-Zoft </span>, we are dedicated to empowering individuals and businesses with <span className="text-primary font-semibold"> cutting-edge </span>technology solutions and comprehensive training programs. Our mission is to bridge the gap between technology and its users, ensuring that everyone has the tools and knowledge to thrive in the digital age. With a team of <span className="text-primary font-semibold"> tech-savvy </span> experts,<span className="text-primary font-semibold"> innovative  </span>thinkers and <span className="text-primary font-semibold"> passionate</span> educators, we make technology accessible, practical, and truly transformative.</p>
          <div className=" ">
            <Acordian data={[
              { question: "01. Our History", answer: "Key factors include keyword optimization, high-quality content, backlinks, mobile-friendliness, page speed, and user experience." },
              { question: "02. Our Mission", answer: "You can do SEO yourself with proper learning, but hiring an agency can save time and provide expertise to improve results faster." },
              { question: "03. Our Vision", answer: "SEO requires ongoing maintenance to adapt to search engine updates, competition, and changing user behaviors." }
            ]} />
          </div>

        </div>
      </div>
      <div className="grid gap-10 w-full  justify-center pt-36 lg-44 xl:pt-48">
        <InnerHeading title={"Brands"} heading="Brands we have have worked with" />
        <Brandings banner2 />
      </div>
      <div className="xl:pt-36 pt-28 md: w-full  ">
        <Heading heading="Meet The Founder" title="ABOUT FOUNDER" />
        <p className="pt-20 text-2xl text-white/80 font-satoshi ">
          James Andrews, the heart of Celestial Solutions. With a decade of digital marketing expertise, James's passion for innovation and dedication to clients have guided our journey. His strategic vision, client-centered approach, and knack for creative solutions shape our commitment to excellence.
        </p>

        <div className=" flex xl:flew-row gap-14 xl:w-[80%] items-center justify-center flex-col md:flex-row w-full xl:mx-auto  ">
          <div className=" " >
            <FounderBanner />
          </div>
          <div className=" md:pt-26 ">

            <p className="font-satoshi text-white/80 ">
              J. Andrews, the driving force behind Celestial Solutions. With over a decade of experience in digital marketing, James's passion for innovation and dedication to client success have been the cornerstone of our agency's growth. His strategic vision and hands-on approach have propelled us to the forefront of the industry, while his commitment to transparency and integrity sets the tone for our team. As a respected leader and mentor, James inspires us to exceed expectations and deliver exceptional results for our clients every day.
            </p>
            <div className="pt-10 gap-4 flex flex-wrap w-[80%] justify-center md:justify-between    mx-auto">
              {
                highLights.map(({ text }, index) => (
                  <Label key={index} text={text} />
                ))
              }
            </div>
            <div className="pt-10 ">
              <h2 className="text-white/80">Featured In:</h2>
              <Brands />
            </div>
          </div>
        </div>
      </div>
      <div className="grid pt-48 gap-48">
        <InnerHeading title={"HOW WE WORK"} heading={"Our 4 Stage Process"} />
        <div className="grid gap-16">
          {
            workSteps.map(({ number, stage, description }, index) => (
              <Step key={index} number={number} line={index != workSteps.length - 1} stage={stage} description={description} />
            ))
          }
        </div>
      </div>
      <div className="pt-52 ">

        <InnerHeading title={"TEAM MEMBERS"} heading={"Say Hello to Our Team "} />
        <p className="text-center pt-5 pb-20 mx-auto w-[40%] text-xl text-white/80 font-satoshi ">
          Get ready to meet the faces behind the magic, the dreamers, the doers, and the unstoppable force driving our success.
        </p>
        <div className="flex flex-wrap w-[80%]  gap-20 mx-auto justify-center lg:justify-between">
          {
            teamMembers.map(({ title, name, position, image, links }, index) => (
              <Team key={index} title={title} name={name} position={position} links={links} image={image} />
            ))
          }

        </div>
      </div>
      <div className="pt-48 gap-48 flex flex-col items-center">
        <InnerHeading title={"FREQUENTLY ASKED QUESTIONS"} heading={"Got Questions? We've Got Answers!"} />
        <FaqSingle />

      </div>

    </div>
  </div>;
}

export default About;

const teamMembers = [
  {
    title: "Tech Associate",
    name: "John Doe",
    position: "Software Developer",
    image: "images/team.avif",
    links: ["https://github.com", "#", "#", "#"]
  },
  {
    title: "Tech Associate",
    name: "John Doe",
    position: "Software Developer",
    image: "images/team.avif",
    links: ["https://github.com", "#", "#", "#"]
  },
  {
    title: "Tech Associate",
    name: "John Doe",
    position: "Software Developer",
    image: "images/team.avif",
    links: ["https://github.com", "#", "#", "#"]
  },
  {
    title: "Tech Associate",
    name: "John Doe",
    position: "Software Developer",
    image: "images/team.avif",
    links: ["https://github.com", "#", "#", "#"]
  },
]

const highLights = [
  { text: "Visionary Thinking" },
  { text: "Empathetic Leader" },
  { text: "Creative Problem-Solver" },
  { text: "Passionate Mentor" },
]
const workSteps = [
  {
    number: "01",
    stage: "Discovery Phase",
    description: "We identify your target audience, understand their needs, and create a compelling content strategy."

  },
  {
    number: "02",
    stage: "Development Phase",
    description: "We build a strong content team, implement relevant SEO strategies, and optimize your website for search engines."
  },
  {
    number: "03",
    stage: "Launch Phase",
    description: "We launch your website, engage with your audience, and monitor your performance to continually improve."
  },
  {
    number: "04",
    stage: "Monitoring Phase",
    description: "We launch your website, engage with your audience, and monitor your performance to continually improve."
  },


]
