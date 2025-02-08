import React from "react";
import { ArrowUpRight } from "lucide-react";

function ServiceCard(props) {
  return (
    <div className="bg-[#1a1a1a] text-white rounded-2xl p-6 md:p-8 w-full max-w-sm md:max-w-md lg:max-w-lg flex flex-col justify-between transition-transform transform hover:scale-105 shadow-lg border border-gray-800">
      {/* Icon & Title */}
      <div className="flex items-center gap-4">
        <div className="p-3 rounded-xl bg-[#2a2a2a] text-orange-400 text-xl">
          {props.icon}
        </div>
        <h2 className="text-xl font-semibold">{props.title}</h2>
      </div>

      {/* Description */}
      <p className="text-gray-400 mt-4">{props.description}</p>

      {/* Learn More Button */}
      <a
        href={props.link}
        className="flex items-center gap-2 text-orange-400 mt-4 font-semibold hover:underline text-primary"
      >
        LEARN MORE <ArrowUpRight size={18} />
      </a>
    </div>
  );
}

export default ServiceCard;
