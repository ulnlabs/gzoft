import React from "react";
import Tag from "../common/Tag";
import Brandings from "../common/Brandings";
import { motion } from "framer-motion";
function Branding() {
  return (
    <motion.div
      initial={{ y: 100 , opacity: 0}}
      whileInView={{ y: 0 , opacity: 1}}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{
        once: true,
      }}
      className="container max-md:px-4 mx-auto flex flex-col items-center justify-center gap-2.5 py-[6rem]"
    >
      <Tag text="Best Tech Partner" />
      <h1 className="text-4xl text-center text-white my-4">
        Brands that trust us
      </h1>
      <Brandings />
    </motion.div>
  );
}

export default Branding;
