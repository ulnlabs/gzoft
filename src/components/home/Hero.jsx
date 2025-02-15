import React from "react";
import Button from "../common/Button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.6,
        delay: 0.5,
      }}
      className="flex w-full max-md:px-4 flex-col items-center justify-start pt-[8rem] text-white"
    >
      <div className="flex flex-col items-center gap-2">
        <h1 className=" flex gap-2 text-6xl max-md:text-5xl max-sm:text-2xl">
          The Best{" "}
          <span className="bg-primary rotate-3">
            <p className="text-black -rotate-3">Digital</p>
          </span>
        </h1>
        <h1 className="flex gap-2 text-6xl max-md:text-5xl max-sm:text-2xl">
          <p>Marketing</p>
          <div className="bg-primary rounded-full h-10">
            <img src="/images/hero-mic.avif" className="h-full w-full" alt="" />
          </div>
          <p>Agency.</p>
        </h1>
        <div className="flex items-center flex-col gap-4 max-sm:text-sm">
          <p className="max-w-lg text-center font-satoshi text-white/90">
            We believe in combining innovative design, sustainable practices,
            and exceptional craftsmanship to bring your vision to life.
          </p>
          <Link to="/contact">
            <Button className={"max-md:hidden"} size={2} text="Get Started" />
            <Button className={"md:hidden"} size={1} text="Get Started" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
