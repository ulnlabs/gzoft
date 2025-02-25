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
import Faq from "../components/home/Faq";
import { teamMembers,highLights,workSteps } from "../Data/about";

function About() {
  return <div className="pt-[8rem] px-5 md:px-10">
    <div >
      <Hero />
    </div>
    <div className="container mx-auto">
      <div className="xl:pt-24 md:pt-14 pt-5" >
        <Heading heading={"About Our Company"} title={"WHO WE ARE"} />
        <div className="flex gap-20 xl:flex-row  flex-col w-full pt-10 items-start ">
          <p className=' text-xl  xl:text-2xl h-full font-satoshi   w-full leading-10 text-gray-400'>
            <span className="text-primary">G-Zoft</span>  is a distinguished IT company offering a comprehensive range of <span className="text-white">IT products, services, and training</span>.
            When it comes to products, we pride ourselves on the capability to create anything from fundamental<span className="text-white"> IT solutions</span> to the most <span className="text-primary">advanced innovations</span>.<span className="text-white"> Our commitment</span> to clients extends beyond creation, as we provide<span className="text-primary"> round-the-clock</span>  service to ensure complete satisfaction.
            <span className="text-white"> Our philosophy</span> is rooted in cultivating subject matter experts. Through our dedicated<span className="text-white"> training division</span>, we offer both offline and online training programs tailored for<span className="text-white"> corporates, colleges, schools, and individuals</span>. Our aim is to empower each participant with unparalleled<span className="text-primary"> expertise and knowledge</span>.
          </p>
          <div className="w-[80%] ">
            <Acordian data={[
              { question: "01. Our History", answer: "G-Zoft was founded to revolutionize IT with cutting-edge solutions, exceptional services, and expert training. Over the years, we have built a strong reputation for innovation and excellence." },
              { question: "02. Our Mission", answer: "To empower businesses and individuals with innovative IT solutions, continuous support, and expert-led training, fostering a skilled and tech-driven future." },
              { question: "03. Our Vision", answer: "To be a global leader in IT solutions and education, driving innovation and shaping future-ready professionals." }
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
          <span> James Andrews</span>, the heart of Celestial Solutions. With a decade of digital marketing expertise, James's passion for innovation and dedication to clients have guided our journey. His strategic vision, client-centered approach, and knack for creative solutions shape our commitment to excellence.
        </p>

        <div className=" flex xl:flew-row gap-14 xl:w-[80%] items-center justify-center flex-col lg:flex-row w-full xl:mx-auto  ">
          <div className=" " >
            <FounderBanner />
          </div>
          <div className=" md:pt-26 ">

            <p className="font-satoshi text-white/80 ">
              J. Andrews, the driving force behind Celestial Solutions. With over a decade of experience in digital marketing, James's passion for innovation and dedication to client success have been the cornerstone of our agency's growth. His strategic vision and hands-on approach have propelled us to the forefront of the industry, while his commitment to transparency and integrity sets the tone for our team. As a respected leader and mentor, James inspires us to exceed expectations and deliver exceptional results for our clients every day.
            </p>
            <div className="pt-10 gap-4 flex flex-wrap w-[80%] justify-start ">
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
          Meet the visionaries, the doers, and the unstoppable force behind our success.</p>
        <div className="flex flex-wrap w-[95%] gap-y-20 gap-3 justify-center   mx-auto ">
          { 
            teamMembers.map(({ title, title2, name, position, image, links }, index) => (
              <Team key={index} title={title} title2={title2} name={name} position={position} links={links} image={image} cardname={"name"} />
            ))
          }

        </div>
      </div>
      <div className="pt-48 gap-48 flex flex-col items-center w-full">
        <Faq />
      </div>
    </div>
  </div>;
}

export default About;
