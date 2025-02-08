import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import gsap from "gsap";
import React from "react";
import { FaPlay } from "react-icons/fa";
function Cursor({ className }) {
  useGSAP(() => {
    gsap.fromTo(
      "#playbtn",
      { fontSize: 12, opacity: 0 },
      { fontSize: 40, opacity: 1, duration: 0.2, ease: "linear" }
    );
    gsap.to("#outerring", {
      padding: 22,
    });
    gsap.to("#innercircle", {
      padding: 18,
      fontSize: 38,
    });
    gsap.fromTo(
      "#cursor",
      { height: 0, width: 0, opacity: 0 },
      { height: "200px", width: "200px", opacity: 1, duration: 1 }
    );
  });
  return (
    <div
      id="cursor"
      className={`relative flex items-center rounded-full justify-center h-fit w-fit overflow-hidden ${className}`}
    >
      <div
        id="outerring"
        className="absolute p-4 bg-white/10 backdrop-blur rounded-full flex items-center justify-center z-0"
      >
        <div
          id="innercircle"
          className="p-2 bg-white/30 rounded-full flex items-center justify-center"
        >
          <FaPlay id="playbtn" className="ml-1 text-black" />
        </div>
      </div>
      <motion.svg
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="absolute"
      >
        <path
          id="textPath"
          d="M 60, 60 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
          fill="none"
        />
        <text className="font-satoshi relative z-20">
          <textPath
            href="#textPath"
            startOffset="0"
            textAnchor="top"
            fontSize="10"
            fill="white"
            fontFamily="satoshi"
            className=" text-[14px] font font-satoshi relative z-20"
          >
            ✦ PLAY VIDEO ✦ KNOW ABOUT US ✦ AGENCEE
          </textPath>
        </text>
      </motion.svg>
    </div>
  );
}

export default Cursor;
