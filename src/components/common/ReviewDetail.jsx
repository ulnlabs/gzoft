import React from "react";
import { TiStar } from "react-icons/ti";
import { motion } from "framer-motion";
import { reviews } from "../../Data/review";
function Review() {
  

  
  return (
    <motion.div
    initial={{
      opacity: 0,
      y: 70,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    transition={{
      duration: 1.0,
      delay: 0.5,
    }} className={` grid grid-cols-12 gap-x-4 space-y-3   `}>
      {
        reviews.map((item, key) => {
          return (
            <div 
           
             key={key} className=" group hover:border hover:bg-white/1 hover:border-white transition duration-300 md:col-span-6 col-span-12 h-fit border border-zinc-500 rounded-2xl p-4 bg-black/10 shadow-md">
              <div className="">
                <div className="flex justify-between ">
                  <div className="flex">

                  {Array.from({ length: item.Ratings }).map((_, i) => (
                    <TiStar key={i} color="orange" className="text-blue-500" />
                  ))}
                  </div>
                  <div className="">
                    <img src={item.logo} alt="" className="group-hover:scale-110 transition-transform duration-200"  />
                  </div>

                </div>
                <div className="py-0">
                  <p className="font-popins p-2 text-white/60 ">
                    {item.feedback}
                  </p>
                  <div className="border-t flex gap-4 border-zinc-500 pt-4">
                    <img src={item.profile} className="w-[50px] h-[50px] rounded-2xl " alt="" />
                    <div className="flex  flex-col text-white gap-1">
                      <h1>{item.username}</h1>
                      <p className="uppercase text-xs text-zinc-700">{item.companyname}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })


      }


      
    </motion.div>
  );
}

export default Review;
