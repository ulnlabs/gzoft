import React from "react";
import Tag from "../common/Tag";
import Carousel from "../common/Carosal";
import { FaArrowUp } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
function Works() {
  useGSAP(() => {
    gsap.to("#workcard1", {
      marginTop: 100,
      scrollTrigger: {
        trigger: "#works",
        start: "top bottom",
        end: "center top",
        scrub: true,
      },
    });
    gsap.fromTo("#workcard2", {
      marginTop: 100,
      scrollTrigger: {
        trigger: "#works",
        start: "top bottom",
        end: "center top",
        scrub: true,
        markers:true
      },
    },{
      marginTop: -10,
      scrollTrigger: {
        trigger: "#works",
        start: "top bottom",
        end: "center top",
        scrub: true,
        markers:true
      },
    });
  });
  return (
    <div 
    id="works"
    className="container mx-auto flex flex-col items-center justify-center gap-y-4 py-[4rem]">
      <div className="flex items-center justify-center gap-4 flex-col">
        <Tag text="Works" />
        <h1 className="text-4xl font-bold text-center text-white max-md:text-2xl">
          Case Study
        </h1>
      </div>
      <div className="w-full flex gap-8">
        <div id="workcard1" className="w-full flex flex-col gap-6">
          <div className="aspect-square w-full flex flex-col gap-4">
            <Carousel
              images={[
                "/carosalimages/about.jpg",
                "/carosalimages/exp-service.avif",
                "/carosalimages/person2.jpg",
              ]}
            />
            <div className="w-full p-8 border-white/80 bg-white/10 rounded-2xl">
              <Tag text="Case Study" />
              <div className="flex flex-col gap-2 py-2">
                <h1 className="text-white text-2xl font-bold">
                  Content Writing For Video Grapher
                </h1>
                <p className="font-satoshi text-white/80">
                  How Stellar Scripts Elevated a Videographer's Portfolio
                  Website
                </p>
              </div>
              <div className="">
                <div className="">
                  <h1 className="text-4xl text-primary">40%</h1>
                  <p className="font-satoshi text-white/80">
                    Increase in website traffic
                  </p>
                </div>
                <div className="">
                  <h1 className="text-4xl text-primary">70%</h1>
                  <p className="font-satoshi text-white/80">
                    Target keywords ranked
                  </p>
                </div>
              </div>
              <div className="text-xs flex items-center py-5 gap-3 text-white/80">
                <p>LEARN MORE</p>
                <div className="border-[1px] border-white/10 p-2 rounded-full">
                  <FaArrowUp className="rotate-45" />
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-square w-full flex flex-col gap-4">
            <Carousel
              images={[
                "/carosalimages/about.jpg",
                "/carosalimages/exp-service.avif",
                "/carosalimages/person2.jpg",
              ]}
            />
            <div className="w-full p-8 border-white/80 bg-white/10 rounded-2xl">
              <Tag text="Case Study" />
              <div className="flex flex-col gap-2 py-2">
                <h1 className="text-white text-2xl font-bold">
                  Content Writing For Video Grapher
                </h1>
                <p className="font-satoshi text-white/80">
                  How Stellar Scripts Elevated a Videographer's Portfolio
                  Website
                </p>
              </div>
              <div className="">
                <div className="">
                  <h1 className="text-4xl text-primary">40%</h1>
                  <p className="font-satoshi text-white/80">
                    Increase in website traffic
                  </p>
                </div>
                <div className="">
                  <h1 className="text-4xl text-primary">70%</h1>
                  <p className="font-satoshi text-white/80">
                    Target keywords ranked
                  </p>
                </div>
              </div>
              <div className="text-xs flex items-center py-5 gap-3 text-white/80">
                <p>LEARN MORE</p>
                <div className="border-[1px] border-white/10 p-2 rounded-full">
                  <FaArrowUp className="rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="workcard2"
          className="w-full flex flex-col gap-6 relative max-lg:hidden mt-[100px]"
        >
          <div className="aspect-square w-full flex flex-col gap-4">
            <Carousel
              images={[
                "/carosalimages/about.jpg",
                "/carosalimages/exp-service.avif",
                "/carosalimages/person2.jpg",
              ]}
            />
            <div className="w-full p-8 border-white/80 bg-white/10 rounded-2xl">
              <Tag text="Case Study" />
              <div className="flex flex-col gap-2 py-2">
                <h1 className="text-white text-2xl font-bold">
                  Content Writing For Video Grapher
                </h1>
                <p className="font-satoshi text-white/80">
                  How Stellar Scripts Elevated a Videographer's Portfolio
                  Website
                </p>
              </div>
              <div className="">
                <div className="">
                  <h1 className="text-4xl text-primary">40%</h1>
                  <p className="font-satoshi text-white/80">
                    Increase in website traffic
                  </p>
                </div>
                <div className="">
                  <h1 className="text-4xl text-primary">70%</h1>
                  <p className="font-satoshi text-white/80">
                    Target keywords ranked
                  </p>
                </div>
              </div>
              <div className="text-xs flex items-center py-5 gap-3 text-white/80">
                <p>LEARN MORE</p>
                <div className="border-[1px] border-white/10 p-2 rounded-full">
                  <FaArrowUp className="rotate-45" />
                </div>
              </div>
            </div>
          </div>
          <div className="aspect-square w-full flex flex-col gap-4">
            <Carousel
              images={[
                "/carosalimages/about.jpg",
                "/carosalimages/exp-service.avif",
                "/carosalimages/person2.jpg",
              ]}
            />
            <div className="w-full p-8 border-white/80 bg-white/10 rounded-2xl">
              <Tag text="Case Study" />
              <div className="flex flex-col gap-2 py-2">
                <h1 className="text-white text-2xl font-bold">
                  Content Writing For Video Grapher
                </h1>
                <p className="font-satoshi text-white/80">
                  How Stellar Scripts Elevated a Videographer's Portfolio
                  Website
                </p>
              </div>
              <div className="">
                <div className="">
                  <h1 className="text-4xl text-primary">40%</h1>
                  <p className="font-satoshi text-white/80">
                    Increase in website traffic
                  </p>
                </div>
                <div className="">
                  <h1 className="text-4xl text-primary">70%</h1>
                  <p className="font-satoshi text-white/80">
                    Target keywords ranked
                  </p>
                </div>
              </div>
              <div className="text-xs flex items-center py-5 gap-3 text-white/80">
                <p>LEARN MORE</p>
                <div className="border-[1px] border-white/10 p-2 rounded-full">
                  <FaArrowUp className="rotate-45" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;
