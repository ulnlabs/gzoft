import React from "react";
import { FaArrowRight } from "react-icons/fa6";
function PrimaryLink({ href, text, className }) {
  return (
    <a href={href} className="group cursor-pointer">
      <button className={`primary-btn-link ${className}`}>
        {text}
        <FaArrowRight className="transition-all ease-in duration-200 -rotate-45 group-hover:rotate-0" />
      </button>
    </a>
  );
}

export default PrimaryLink;
