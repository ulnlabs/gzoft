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

      {/* <Acordian /> */}
      {/* < Whyus /> */}
      </div>
    </div>
  );
}

export default Home;
