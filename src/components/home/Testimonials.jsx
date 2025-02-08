import React, { useRef } from "react";
import Review from "../common/Review";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../common/Button";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
gsap.registerPlugin(ScrollTrigger);
function Testimonials() {
  const testiref = useRef(null);
  const testirefheight = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
    });
    const height = testirefheight.current.clientHeight;
    tl.to(testiref.current, {
      duration: 10,
      y: -height,
      ease: "none",
    });
    tl.to(testiref.current, {
      y: 0,
      duration: 0,
    });
  });
  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{
        once: true,
      }}
    >
      <div className="max-h-screen w-full overflow-hidden relative flex flex-col items-center justify-start ">
        <div className="max-sm:px-4 container min-h-full mx-auto  flex flex-col items-center justify-start gap-y-4 py-[4rem]">
          <div className="absolute w-6xl top-0 mx-auto h-12 rounded-b-full blur-3xl bg-primary"></div>
          <div className="h-full flex flex-col items-center justify-start">
            <h1 className="text-8xl max-md:text-6xl tracking-widest absolute top-0  text-center text-white/20 uppercase max-sm:text-4xl">
              Testimonials
            </h1>
            <div
              ref={testiref}
              className="flex flex-col items-center justify-center gap-y-2 top-0"
            >
              <div ref={testirefheight} className="flex gap-4 flex-col">
                {[1, 2, 3, 4].map((item, index) => (
                  <Review />
                ))}
              </div>
              <div className="flex gap-4 flex-col">
                {[1, 2, 3, 4].map((item, index) => (
                  <Review />
                ))}
              </div>
            </div>
          </div>
          <div className="absolute w-6xl bottom-0 mx-auto h-12 rounded-t-full blur-3xl bg-black/60 z-3"></div>
        </div>
      </div>
      <div className=" container mx-auto py-[4rem] max-lg:px-4">
        <div className="flex gap-8 max-lg:flex-col">
          <div className="w-full min-h-10 bg-dark text-center flex flex-col gap-4 rounded-2xl p-4">
            <div className="w-full rounded-2xl lg:h-[400px] h-[300px]"></div>
            <div className="text-white text-sm">
              <h1>Magnus Hawthorne</h1>
              <p className="text-white/70 text-xs"> Owner, Bayleaf</p>
            </div>
          </div>
          <div className="w-full min-h-10 bg-dark text-center flex flex-col gap-4 rounded-2xl p-4">
            <div
              className="w-full rounded-2xl lg:h-[400px] h-[300px]"
              width="560"
            ></div>
            <div className="text-white text-sm">
              <h1>Thaddeus Montgomery</h1>
              <p className="text-white/70 text-xs">Owner, GoldGarden</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-8">
          <a href="/reviews">
            <Button text="VIEW ALL REVIEWS" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Testimonials;
