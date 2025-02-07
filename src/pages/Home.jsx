import React from "react";
import Cursor from "../components/common/Cursor";
import Hero from "../components/home/Hero";
import HeroVi from "../components/home/HeroVi";
import Acordian from "../components/common/Acordian"
import Whyus from "../components/common/Whyus";
import Project from "../components/common/Projects"



function Home() {
  return (
    <div className="flex w-full min-h-screen flex-col ">
      <Hero />
      <HeroVi />
      <div className="p-10">

      <Acordian data={ [
    { question: "What is SEO and why is it important?", answer: "SEO (Search Engine Optimization) is the practice of optimizing a website to rank higher on search engines like Google. It helps increase visibility, drive organic traffic, and improve credibility." },
    { question: "How long does it take to see results from SEO?", answer: "SEO is a long-term strategy. It typically takes 3-6 months to see significant improvements, but results depend on competition, website quality, and ongoing efforts." },
    { question: "What are the key factors that influence SEO rankings?", answer: "Key factors include keyword optimization, high-quality content, backlinks, mobile-friendliness, page speed, and user experience." },
    { question: "Do I need to hire an SEO agency, or can I do SEO myself?", answer: "You can do SEO yourself with proper learning, but hiring an agency can save time and provide expertise to improve results faster." },
    { question: "How much does SEO cost?", answer: "SEO costs vary based on whether you do it yourself, hire freelancers, or work with an agency. It can range from free (DIY) to thousands of dollars per month for professional services." },
    { question: "Can I rank #1 on Google for any keyword?", answer: "Ranking #1 depends on competition, keyword difficulty, and SEO efforts. Highly competitive keywords may require significant time and resources." },
    { question: "Is SEO a one-time effort, or does it require ongoing maintenance?", answer: "SEO requires ongoing maintenance to adapt to search engine updates, competition, and changing user behaviors." }
  ]} />
      {/* < Whyus /> */}
   
      </div>
    </div>
  );
}

export default Home;
