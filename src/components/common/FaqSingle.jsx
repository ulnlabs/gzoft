import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

function FaqSingle({}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      gsap.to("#faqcard", {
        padding: "1rem 1rem 0rem 1rem",
        ease: "power4.inOut",
        duration: 0.5,
        delay: -0.2,
      });
      gsap.to("#faqmsg", {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power4.out",
      });
      gsap.to("#faqbtn", {
        rotate: 180,
        duration: 0.5,
        ease: "power4.out",
      });
    } else {
      gsap.to("#faqmsg", {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
      });
      gsap.to("#faqcard", {
        padding: "1rem 1rem 0rem 2rem",
        ease: "power4.inOut",
        duration: 0.5,
      });
      gsap.to("#faqbtn", {
        rotate: 0,
        duration: 0.5,
        ease: "power4.out",
      });
    }
  }, [show]);
  return (
    <div
      id="faqcard"
      className="w-[600px] h-auto p-3 flex flex-col gap-4 text-gray-300 bg-white/10 rounded-2xl"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-sm">What service do you offer?</h1>
        <button
          onClick={() => setShow(!show)}
          className="bg-primary p-2 rounded-lg cursor-pointer "
        >
          <div id="faqbtn" className="">
            <FaAngleDown className="text-black"/>
          </div>
        </button>
      </div>
      <div
        id="faqmsg"
        className="font-thin text-xs h-0 opacity-0 overflow-hidden"
      >
        <p className="py-5">
          GreenScape offers a wide range of landscaping services including
          landscape design and installation, lawn maintenance, hardscaping,
          irrigation systems, tree and shrub care, and more.
        </p>
      </div>
    </div>
  );
}

export default FaqSingle;
