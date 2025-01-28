import React from "react";
import HeroHead from "./HeroHead";

function Hero() {
  return (
    <div className="top-0 left-0 flex flex-col justify-start items-center h-fit w-screen bg-linear-to-b from-[#F6F7FF] to-[#FFFFFF]">
      <HeroHead />
    </div>
  );
}

export default Hero;
