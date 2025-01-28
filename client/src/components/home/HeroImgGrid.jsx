import React from "react";

function HeroImgGrid() {
  return (
    <div className="container grid grid-cols-4 grid-rows-2 gap-4">
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] bg-gray-800 rounded-xl"></div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] bg-gray-800 rounded-xl col-start-1 col-span-1"></div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] bg-gray-800 rounded-xl row-start-2 "></div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] bg-gray-800 rounded-xl"></div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] bg-gray-800 rounded-xl"></div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] bg-gray-800 rounded-xl"></div>
    </div>
  );
}

export default HeroImgGrid;
