import React from "react";
import HeroHead from "../components/home/HeroHead";
import HeroImgGrid from "../components/home/HeroImgGrid";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-fit">
      <HeroHead />
      <HeroImgGrid />
    </div>
  );
}

export default Home;
