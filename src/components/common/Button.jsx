import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { TiArrowUp } from "react-icons/ti";

function Button({ text = "GET IN TOUCH", className, size = 1 }) {
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (isHovered) {
      gsap.to("#button-arrow", { x: 8, duration: 0.5 });
      gsap.to("#btnarrow", { rotate: "90deg", duration: 0.5 });
    } else {
      gsap.to("#button-arrow", { x: 1, duration: 0.5 });
      gsap.to("#btnarrow", { rotate: "45deg", duration: 0.5 });
    }
  }, [isHovered]);
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`flex items-center justify-center text-dark group cursor-pointer ${size === 1 ? "h-[40px]" : "h-[50px]"} `}
    >
      <p
        className={`bg-primary px-6 h-full rounded-l-full flex items-center ${className}`}
      >
        {text}
      </p>
      <div
        id="button-arrow"
        className="p-3 h-full bg-primary rounded-r-full flex items-center"
      >
        <TiArrowUp id="btnarrow" className="text-2xl" />
      </div>
    </button>
  );
}

export default Button;
