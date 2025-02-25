import React from "react";
import { ArrowUpRight } from "lucide-react";
import { FaArrowUp } from "react-icons/fa6";

function ServiceCard(props) {
  return (
    <a
      href={props.link}
      className="bg-dark cursor-pointer group text-white rounded-2xl p-6 md:p-8 w-full flex flex-col justify-between shadow-lg border border-gray-800"
    >
      <div className="flex flex-col gap-4">
        <div className="p-3 rounded-xl w-12 bg-[#2a2a2a] text-xl">
          {props.icon}
        </div>
        <h2 className="text-xl font-semibold">{props.title}</h2>
      </div>

      <p className="text-gray-400 mt-20 font-satoshi">{props.description}</p>

      <a href={props.link} className="flex items-center gap-2 text-xs py-4">
        LEARN MORE{" "}
        <span className="border rounded-full p-2 border-white/50 group-hover:bg-primary transition-all ease-linear duration-300">
          <FaArrowUp className="rotate-45 group-hover:rotate-90 transition-all ease-linear duration-300 font-thin group-hover:text-dark" />
        </span>
      </a>
    </a>
  );
}

export default ServiceCard;
