import { Star } from "lucide-react";
import React from "react";
import { FaStar } from "react-icons/fa";

function ReviewDetail() {
  return (
    <div className="max-w-md mx-auto p-4 sm:p-6 lg:p-8 bg-white/5 rounded-2xl space-y-2">
      <div className=" flex items-center  space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar key={star} className="text-primary text-sm" />
        ))}
      </div>
      <p
      className="font-satoshi text-white/80 "
      >
        Bright Horizon Marketing has been an invaluable partner for our bakery.
        Their team's expertise in SEO and online marketing has helped us stand
        out in a competitive market. From optimizing our website to managing our
        social media presence, their strategic approach has delivered impressive
        results. Thanks to their efforts, we've seen a significant increase in
        online orders and customer engagement. I couldn't be happier with the
        results, and I highly recommend Bright Horizon Marketing to anyone
        looking to grow their business online.
      </p>
      <div className="">
        <h1
        className="text-white/90"
        >S. Thompson</h1>
        <p
        className="text-white/70 text-xs uppercase"
        >CEO, Company</p>
      </div>
    </div>
  );
}

export default ReviewDetail;
