import React from "react";
import Cursor from "../components/common/Cursor";
import Hero from "../components/home/Hero";
import HeroVi from "../components/home/HeroVi";

function Home() {
  return (
    <div className="flex w-full min-h-screen flex-col ">
      <Hero />
      <HeroVi />
    </div>
  );
}

export default Home;
