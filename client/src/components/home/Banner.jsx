import React from "react";

function Banner() {
  return (
    <div className="container max-md:px-6 flex max-md:flex-col justify-between max-md:items-center items-center py-[4rem] gap-4">
      <div className="flex items-start justify-start w-full max-md:justify-center max-md:text-center ">
        <h1 className="text-4xl ">
          We Helped Businesses In <br /> Generating{" "}
          <span className="gradient-text">✦2x Profits</span>
        </h1>
      </div>
      <div className="flex md:justify-end gap-4 py-6 justify-around">
        <div className="flex flex-col w-fit whitespace-nowrap items-start justify-center">
          <h1 className="text-4xl font-bold">98%</h1>
          <p className="text-zinc-700 font-semibold">Client Satisfaction</p>
        </div>
        <div className="flex flex-col w-fit whitespace-nowrap items-start justify-center">
          <h1 className="text-4xl font-bold">89%</h1>
          <p className="text-zinc-700 font-semibold">Revenue Increased</p>
        </div>
        <div className="flex flex-col w-fit whitespace-nowrap items-start justify-center">
          <h1 className="text-4xl font-bold">15k+</h1>
          <p className="text-zinc-700 font-semibold">Happy Customers</p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
