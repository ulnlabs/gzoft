import React from "react";
import { TiStar } from "react-icons/ti";
import { FaQuoteLeft } from "react-icons/fa6";
function Review() {
  return (
    <div className="w-[350px] h-fit border border-zinc-500 rounded-2xl p-4 bg-black/10 shadow-md">
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((i) => (
          <TiStar color="orange" className="text-blue-500" />
        ))}
      </div>
      <div className="">
        <FaQuoteLeft className="text-8xl  text-orange-400/40" />
      </div>
      <div className="py-0">
        <p className="font-popins relative py-0 -top-10 font-light text-sm text-zinc-300">
          Bright Horizon Marketing has been an invaluable partner for our
          bakery. Their team's expertise in SEO and online marketing has helped
          us stand out in a competitive market. From optimizing our website to
          managing our social media presence, their strategic approach has
          delivered impressive results. Thanks to their efforts, we've seen a
          significant increase in online orders and customer engagement. I
          couldn't be happier with the results, and I highly recommend Bright
          Horizon Marketing to anyone looking to grow their business online.
        </p>
        <div className="border-t flex gap-4 border-zinc-500 pt-4">
          <img src="/profile.jpg" className="w-[60px] rounded-2xl " alt="" />
          <div className="flex flex-col text-white gap-1">
            <h1>S. Thompson</h1>
            <p className="uppercase text-xs text-zinc-700">COMPANY NAME</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
