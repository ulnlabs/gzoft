import React from "react";

function HeroImgGrid() {
  return (
    <div className="container z-0 px-4 max-md:px-6 grid md:grid-cols-4 md:grid-rows-2 gap-4 md:h-[70vh] h-fit mt-4">
      <div className="relative bg-[url(/home/1.png)] max-md:h-[300px] bg-cover bg-center rounded-xl md:row-span-2 md:col-start-1"></div>
      <div className="max-md:hidden  relative bg-[url(/home/2.png)] max-md:h-[300px] bg-cover bg-center rounded-xl md:row-span-1 md:col-start-2"></div>
      <div className="max-md:hidden  relative bg-[url(/home/3.png)] max-md:h-[300px] bg-cover bg-center rounded-xl md:row-span-1 md:col-start-2"></div>
      <div className="max-md:hidden relative bg-[url(/home/4.png)] bg-cover bg-center rounded-xl col-start-3 row-start-1 row-span-2"></div>
      <div className="max-md:hidden relative bg-[url(/home/5.png)] bg-cover bg-center rounded-xl col-start-4 row-start-1 "></div>
      <div className="max-md:hidden relative bg-[url(/home/6.png)] bg-cover bg-center rounded-xl "></div>
    </div>
  );
}

export default HeroImgGrid;
