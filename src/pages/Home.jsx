import React, { useState } from "react";
import Hero from "../components/home/Hero";
import HeroVi from "../components/home/HeroVi";
import Services from "../components/home/Services";
import Faq from "../components/home/Faq";
import Branding from "../components/home/Branding";
import ExpServ from "../components/home/ExpServ";
import Works from "../components/home/Works";
import Testimonials from "../components/home/Testimonials";
function Home() {
  return (
    <div className="flex w-full min-h-screen flex-col cursor-default ">
      <Hero />
      <HeroVi />
      <Services />
      <Branding />
      <ExpServ />
      <Works />
      <Testimonials />
      <Faq />
    </div>
  );
}

export default Home;
