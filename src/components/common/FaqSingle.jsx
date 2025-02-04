import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";

function FaqSingle({}) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    gsap.set("#faqmsg", {
      height: 0,
      opacity: 0,
    });
    gsap.set("#faqcard", {
      padding: "1rem 1rem 0rem 2rem",
    });
    if (show) {
      gsap.to("#faqcard", {
        padding: "1rem 1rem 0rem 1rem",
        ease: "power4.inOut",
        duration: 0.5,
      });
      gsap.to("#faqmsg", {
        height: "auto",
        opacity: 1,
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
    }
  }, [show]);
  return (
    <div
      id="faqcard"
      className="w-[600px] p-3 flex flex-col gap-4 bg-white/10 rounded-2xl"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-sm">What service do you offer?</h1>
        <button
          onClick={() => setShow(!show)}
          className="bg-orange-400 p-2 rounded-lg cursor-pointer "
        >
          <FaAngleDown />
        </button>
      </div>
      <p id="faqmsg" className="font-thin text-xs">
        GreenScape offers a wide range of landscaping services including
        landscape design and installation, lawn maintenance, hardscaping,
        irrigation systems, tree and shrub care, and more.
      </p>
    </div>
  );
}

export default FaqSingle;
