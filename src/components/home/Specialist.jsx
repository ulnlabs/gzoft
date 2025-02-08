import React from "react";
import Tag from "../common/Tag";
import gsap from "gsap";
import { motion } from "framer-motion";
function Specialist() {
  return (
    <motion.div
      initial={{
        y: 100,
        opacity: 0,
        scale: 0.95,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, delay: 0.2 },
      }}
      viewport={{
        once: true,
      }}
      id="specialist"
      className="container mx-auto flex flex-col items-center justify-center gap-y-4 py-[4rem] max-lg:px-4"
    >
      <div id="specialistheader" className="w-full flex gap-6">
        <Tag text="WHY US" />
        <h1 className="text-4xl font-bold text-center text-white max-md:text-2xl">
          Our Specialities
        </h1>
      </div>
      <div
        id="specialistcontainer"
        className="w-full flex items-center lg:justify-end justify-center"
      >
        <p className="text-white/50 font-satoshi lg:w-1/2 w-full">
          Our top-notch digital marketing agency not only delivers impressive
          results but also dazzles our clients with remarkable statistics. We
          pride ourselves on our ability to amaze customers with tangible
          outcomes and eye-catching figures.
        </p>
      </div>
      <div
        id="specialiststats"
        className="w-full flex max-lg:flex-col max-lg:gap-4 pt-6"
      >
        <div className="lg:w-[60%] min-h-[400px] bg-[url(/images/whyus/1.avif)] bg-cover flex items-start justify-end flex-col gap-4 rounded-4xl p-6">
          <div className="flex flex-col items-center justify-center p-6">
            <h1 className="text-white text-6xl font-bold">150%</h1>
            <p className="text-white">Average Traffic Increase</p>
          </div>
          <p className="text-white/50 font-satoshi  py-2 backdrop-blur rounded-2xl px-2">
            Clients choose to stay with us over the long run due to the
            exceptional results we deliver and the strong relationships we
            build.
          </p>
        </div>
        <div className="lg:w-[40%] h-[400px] rounded-4xl bg-dark p-6 flex flex-col items-start justify-between">
          <div className="">
            <h1 className="text-white text-6xl font-bold">$74M</h1>
            <p className="text-white">Revenue Generated</p>
          </div>
          <p className="text-white/50 font-satoshi  py-2 backdrop-blur rounded-2xl px-2">
            We help generated $74M revenue for our clients around the globe
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Specialist;
