import React from "react";
import Review from "../components/common/ReviewDetail";
import { motion } from "framer-motion";



function ReviewPage() {
  return (
    <div
    
     className=" py-[6rem]  container mx-auto">
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
      }} className="flex justify-center text-center text-5xl mt-14   ">
        <h1 className=" text-white">
          Check Our Works With{" "}
          <span className="block ">Real Results</span>
        </h1>
      </motion.div>
      <div className="py-[2rem] ">
        <Review/>

     
     
      </div>
     
     
    </div>
  );
}

export default ReviewPage;
