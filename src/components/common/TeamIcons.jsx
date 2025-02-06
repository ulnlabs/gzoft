import gsap from "gsap";
import React, { useEffect } from "react";
import { FaFacebook, FaLinkedinIn, FaPlus, FaTwitter } from "react-icons/fa";

function TeamIcons({ toggle, setToggle, link = ["#", "#", "#"] }) {
  useEffect(() => {
    if (toggle) {
      gsap.to("#menu", {
        x: -80,
        duration: 1,
        ease: "power4",
        rotate: 0,
      });
      gsap.to("#linkedinIcon", {
        x: -25,
        duration: 1,
        ease: "power4",
        rotate: 0,
      });
      gsap.to("#facebookIcon", {
        x: 25,
        duration: 1,
        ease: "power4",
        rotate: 0,
      });
      gsap.to("#twitterIcon", {
        x: 80,
        duration: 1,
        ease: "power4",
        rotate: 0,
      });
    } else {
      gsap.to("#menu", {
        x: 0,
        duration: 1,
        ease: "power4",
        rotate: 0,
      });
      gsap.to("#linkedinIcon", {
        x: 0,
        duration: 1,
        ease: "power4",
        rotate: -180,
      });
      gsap.to("#facebookIcon", {
        x: 0,
        duration: 1,
        ease: "power4",
        rotate: -270,
      });
      gsap.to("#twitterIcon", {
        x: 0,
        duration: 1,
        ease: "power4",
        rotate: -360,
      });
    }
  }, [toggle]);
  return (
    <div className="w-full relative flex justify-center items-center">
      <div
        id="menu"
        onClick={() => setToggle(!toggle)}
        className="bg-white h-10 w-10 rounded-xl flex items-center justify-center absolute z-3 cursor-pointer"
      >
        <div className="realative flex items-center justify-center">
          <div className="absolute w-7 h-[3px] rounded bg-black"></div>
          <div className="absolute w-7 h-[3px] rounded rotate-90 bg-black"></div>
        </div>
      </div>
      <a
        href={link[0]}
        id="linkedinIcon"
        className="bg-white h-10 w-10 rounded-xl flex items-center justify-center absolute z-2"
      >
        <FaLinkedinIn className="text-black" />
      </a>
      <a
        href={link[1]}
        id="facebookIcon"
        className="bg-white h-10 w-10 rounded-xl flex items-center justify-center absolute z-1"
      >
        <FaFacebook className="text-black" />
      </a>
      <a
        href={link[2]}
        id="twitterIcon"
        className="bg-white h-10 w-10 rounded-xl flex items-center justify-center absolute z-0"
      >
        <FaTwitter className="text-black" />
      </a>
    </div>
  );
}

export default TeamIcons;
