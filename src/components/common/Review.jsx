import React from "react";
import { TiStar } from "react-icons/ti";
import { FaQuoteLeft } from "react-icons/fa6";
function Review({
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  img = "/images/profile.jpg",
  name = "John Doe",
  from = "United States",
}) {
  return (
    <div className="max-w-xl h-fit border border-white/20 rounded-2xl p-4 bg-black/10 shadow-md backdrop-blur">
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <TiStar color="orange" className="text-blue-500" />
        ))}
      </div>
      <div className="">
        <FaQuoteLeft className="text-6xl  text-orange-400/40" />
      </div>
      <div className="py-0">
        <p className="font-popins relative py-0 -top-6 font-light text-sm text-zinc-300">
          {description}
        </p>
        <div className="border-t  flex gap-4 border-white/20 pt-4">
          <img src={img} className="w-[60px] rounded-2xl " alt="" />
          <div className="flex flex-col text-white gap-1">
            <h1>{name}</h1>
            <p className="uppercase text-xs text-zinc-700">{from}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
