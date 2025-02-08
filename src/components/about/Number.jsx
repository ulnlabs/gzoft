import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);
const Number = ({ number, line }) => {
  const numberref = useRef(null);
  const stepRef = useRef(null);
  const stepLine = useRef(null);
  useGSAP(() => {
    gsap.to(numberref.current, {
      filter: "blur(20px)",
      duration: 1,
      scrollTrigger: {
        trigger: stepRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
      },
    });
    gsap.from(stepLine.current, {
      y: "-100%",
      duration: 1,
      scrollTrigger: {
        trigger: stepRef.current,
        start: "top center",
        end: "bottom top",
        scrub: 1,
      },
    });
  });
  return (
    <div
      ref={stepRef}
      className="flex flex-col gap-5 justify-center items-center"
    >
      <div>
        <h1 className="text-2xl md:text-7xl  text-primary relative">
          {number}
          <span
            ref={numberref}
            className="absolute inset-0  text-primary opacity-100"
          >
            {number}
          </span>
        </h1>
      </div>
      {line && (
        <div className="w-1 h-96 bg-white/10 rounded-full overflow-hidden">
          <div
            ref={stepLine}
            className="w-full h-full bg-gradient-to-b from-transparent to-primary "
          ></div>
        </div>
      )}
    </div>
  );
};

export default Number;
