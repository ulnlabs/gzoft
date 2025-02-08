import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

function Brandings({ banner2 = false }) {
  const banner = useRef(null);
  const banner1 = useRef(null);
  const banner02 = useRef(null);
  useGSAP(() => {
    const tl = gsap.timeline({ repeat: -1 });
    const tl2 = gsap.timeline({ repeat: -1 });
    const bannerWidth = banner1.current.clientWidth;
    tl.to(banner.current, {
      x: -bannerWidth,
      duration: 16,
      ease: "none",
    });
    tl.to(banner.current, {
      x: 0,
      duration: 0,
    });
    if (banner2) {
      tl2.to(banner02.current, {
        x: bannerWidth,
        duration: 16,
        ease: "none",
      });
      tl2.to(banner02.current, {
        x: 0,
        duration: 0,
      });
    }
  });
  if (!banner2) {
    return (
      <div className="container mx-auto   border-white/30 border-[1px] overflow-hidden rounded-3xl">
        <div ref={banner} className=" flex ">
          <div ref={banner1} className="flex gap-8 justify-between pl-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white/10 rounded-3xl flex items-center justify-center min-w-[180px]  h-[80px]"
              >
                <img
                  src={`/images/brands/${item}.svg`}
                  className="h-[40px]"
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="flex gap-8 justify-between pl-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white/10 rounded-3xl flex items-center justify-center min-w-[180px]  h-[80px]"
              >
                <img
                  src={`/images/brands/${item}.svg`}
                  className="h-[40px]"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (banner2) {
    return (
      <div className="container mx-auto border-white/30 border-[1px] overflow-hidden rounded-3xl flex flex-col ">
        <div ref={banner} className=" flex">
          <div ref={banner1} className="flex gap-8 justify-between pl-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white/10 rounded-3xl flex items-center justify-center min-w-[180px] mt-2 h-[80px]"
              >
                <img
                  src={`/images/brands/${item}.svg`}
                  className="h-[40px]"
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="flex gap-8 justify-between pl-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white/10 rounded-3xl flex items-center justify-center min-w-[180px] mb-2 h-[80px]"
              >
                <img
                  src={`/images/brands/${item}.svg`}
                  className="h-[40px]"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div ref={banner02} className=" flex justify-end">
          <div ref={banner1} className="flex gap-8 justify-between pl-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white/10 rounded-3xl flex items-center justify-center min-w-[180px] my-4 h-[80px]"
              >
                <img
                  src={`/images/brands/${item}.svg`}
                  className="h-[40px]"
                  alt=""
                />
              </div>
            ))}
          </div>
          <div className="flex gap-8 justify-between pl-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <div
                key={index}
                className="p-4 bg-white/10 rounded-3xl flex items-center justify-center min-w-[180px] my-4 h-[80px]"
              >
                <img
                  src={`/images/brands/${item}.svg`}
                  className="h-[40px]"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Brandings;
