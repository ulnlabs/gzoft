import React from "react";
import { FaStar } from "react-icons/fa";

function Services() {
  return (
    <div className="container relative mx-auto pt-[8rem]">
      <div className="absolute -top-[70px] w-fit h-fit border max-lg:hidden border-white/80 text-white rounded-4xl backdrop-blur p-4">
        <div className="flex flex-col border-b border-white/8 pb-4">
          <p className=" font-bold uppercase">#1 It Consultent</p>
          <p className=" uppercase">BASED IN INDIA</p>
        </div>
        <div className=" flex justify-between items-center w-fit py-4">
          <div className="flex w-full ">
            <div className="h-10 w-10 relative rounded-full border bg-[url(/images/users/1.avif)] bg-cover" />
            <div className="h-10 w-10 relative -left-4 rounded-full border  bg-[url(/images/users/2.avif)] bg-cover" />
            <div className="h-10 w-10 relative -left-8 rounded-full border  bg-[url(/images/users/3.avif)] bg-cover" />
            <div className="h-10 w-10 relative -left-12 rounded-full border  bg-[url(/images/users/4.avif)] bg-cover" />
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <div className="stars flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar className="text-sm text-primary" />
              ))}
            </div>
            <p className="text-xs">200+ 5 Start Review</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
