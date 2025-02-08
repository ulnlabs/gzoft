import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { motion } from "framer-motion";
function HeroVi() {
  const inifiniteBanner = useRef(null);
  useGSAP(() => {
    gsap.to(inifiniteBanner.current, {
      x: -inifiniteBanner.current.clientWidth / 5,
      duration: 20,
      repeat: -1,
      ease: "none",
    });
    gsap.to(inifiniteBanner.current, {
      x: 0,
      duration: 0,
      delay: 20,
    });
  });
  return (
    <div
      className={`relative w-full bg-gradient-to-t md:h-[70vh] lg:h-[700px] h-[400px] from-primary to-transparent flex items-center justify-center overflow-hidden cursor-pointer-none`}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center w-full h-full relative"
      >
        <div ref={inifiniteBanner} className="flex gap-4 text-6xl">
          <p className=" text-nowrap text-white">Best Tech Partner</p>
          <p className=" text-nowrap text-white">Best Tech Partner</p>
          <p className=" text-nowrap text-white">Best Tech Partner</p>
          <p className=" text-nowrap text-white">Best Tech Partner</p>
          <p className=" text-nowrap text-white">Best Tech Partner</p>
        </div>
        <div className="absolute bottom-0 md:h-full flex items-end justify-center w-full">
          <img src="/images/hero.avif" className="aspect-auto h-[90%]" alt="" />
        </div>
      </motion.div>
      <div className="bg-gradient-to-t absolute bottom-0 h-20 w-full from-black to-transparent"></div>
    </div>
  );
}

export default HeroVi;
