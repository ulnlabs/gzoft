import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { FaFacebook, FaLinkedinIn, FaPlus, FaTwitter } from "react-icons/fa";

function TeamIcons({ toggle, setToggle, link = ["#", "#", "#"] }) {
  const menu = useRef(null);
  const linkedinIcon = useRef(null);
  const facebookIcon = useRef(null);
  const twitterIcon = useRef(null);
  useEffect(() => {
    if (toggle) {
      gsap.to(menu.current, {
      x: -80,
      duration: 1,
      ease: "power4",
      rotate: 0,
      });
      gsap.to(linkedinIcon.current, {
      x: -25,
      duration: 1,
      ease: "power4",
      rotate: 0,
      });
      gsap.to(facebookIcon.current, {
      x: 25,
      duration: 1,
      ease: "power4",
      rotate: 0,
      });
      gsap.to(twitterIcon.current, {
      x: 80,
      duration: 1,
      ease: "power4",
      rotate: 0,
      });
    } else {
      gsap.to(menu.current, {
      x: 0,
      duration: 1,
      ease: "power4",
      rotate: 0,
      });
      gsap.to(linkedinIcon.current, {
      x: 0,
      duration: 1,
      ease: "power4",
      rotate: -180,
      });
      gsap.to(facebookIcon.current, {
      x: 0,
      duration: 1,
      ease: "power4",
      rotate: -270,
      });
      gsap.to(twitterIcon.current, {
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
        ref={menu}
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
        ref={linkedinIcon}
        className="bg-white h-10 w-10 rounded-xl flex items-center justify-center absolute z-2"
      >
        <FaLinkedinIn className="text-black" />
      </a>
      <a
        href={link[1]}
        ref={facebookIcon}
        className="bg-white h-10 w-10 rounded-xl flex items-center justify-center absolute z-1"
      >
        <FaFacebook className="text-black" />
      </a>
      <a
        href={link[2]}
        ref={twitterIcon}
        className="bg-white h-10 w-10 rounded-xl flex items-center justify-center absolute z-0"
      >
        <FaTwitter className="text-black" />
      </a>
    </div>
  );
}

export default TeamIcons;
