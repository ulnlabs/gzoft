import React from "react";
import HeroHead from "../components/home/HeroHead";
import HeroImgGrid from "../components/home/HeroImgGrid";
import Banner from "../components/home/Banner";
import Services from "../components/home/Services";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-fit">
      <HeroHead />
      <HeroImgGrid />
      <Banner />
      <Services />
    </div>
  );
}

export default Home;
