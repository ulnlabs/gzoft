import React, { useState } from "react";
import Hero from "../components/home/Hero";
import HeroVi from "../components/home/HeroVi";
import Services from "../components/home/Services";
import Faq from "../components/home/Faq";
function Home() {
  return (
    <div className="flex w-full min-h-screen flex-col ">
      <Hero />
      <HeroVi />
      <Services />
      <Faq />
    </div>
  );
}

export default Home;
