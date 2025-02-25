import React from "react";
import Acordian from "../common/Acordian";
import Tag from "../common/Tag";
import { motion } from "framer-motion";
import {data} from "../faq";
function Faq() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 90 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="p-10 container mx-auto max-lg:px-4"
    >
      <div
        className="
      flex flex-col items-center justify-center py-[2rem] gap-4
      "
      >
        <Tag text="Frequently Asked Questions" />
        <h1 className="text-4xl text-center text-white max-md:text-2xl">
          Got Questions?
          <br />
          We've Got Answers!
        </h1>
      </div>
      <Acordian
        data={data}
      />
    </motion.div>
  );
}

export default Faq;
