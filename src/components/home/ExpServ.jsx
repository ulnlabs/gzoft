import React from "react";
import Stats from "../common/Stats";
import { icons, Rocket, Share2, Target } from "lucide-react";
import { FaReact } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
const whyChooseUs = [
  {
    title: "Proven Track Record",
    description:
      "We have built a reputation as a trusted and reliable partner in achieving business success.",
    icon: <Rocket className="text-primary" />,
  },
  {
    title: "Tailored Solutions",
    description:
      "We offer personalized solutions tailored to your specific goals, audience, and industry.",
    icon: <Share2 className="text-primary" />,
  },
  {
    title: "Client-Centric Focus",
    description:
      "Your success is our priority. We prioritize understanding your business goals.",
    icon: <Target className="text-primary" />,
  },
];
const tinyTitle = [
  {
    id: 1,
    name: "Continuous Innovation",
    icons: <FaReact className="text-primary" />,
  },
  {
    id: 2,
    name: "Quality Assurance",
    icons: <FaReact className="text-primary" />,
  },
  {
    id: 3,
    name: "Dedicated Support",
    icons: <FaReact className="text-primary" />,
  },
  {
    id: 4,
    name: "Commitment to Excellence",
    icons: <FaReact className="text-primary" />,
  },
];

gsap.registerPlugin(ScrollTrigger);

function ExpServ() {
  useGSAP(()=>{
    gsap.to("#ball1",{
      y:80,
      scrollTrigger:{
        trigger:"#exp-serv",
        start:"top 80%",
        end:"bottom 30%",
        scrub:1,
        markers:true
      }
    })
    gsap.to("#ball3",{
      y:80,
      scrollTrigger:{
        trigger:"#exp-serv",
        start:"top 80%",
        end:"bottom 30%",
        scrub:1,
        markers:true
      }
    })
  })
  return (
    <div 
    id="exp-serv"
    className="full relative bg-[url(/images/exp-service.avif)] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col justify-between items-center pb-[4rem]">
      <div className="absolute h-full w-full bg-radial from-primary/50 to-black/50"></div>
      <div className="flex mx-auto w-fit mt-6 container max-lg:px-4 items-center justify-center">
        <div className="flex items-center justify-center relative max-lg:flex-col left-2">
          <Stats
            id={"ball1"}
            num={"15+"}
            className={"relative left-2"}
            sub={"Years of Experience"}
          />
          <Stats
            id={"ball2"}
            className={"relative -left-2"}
            num={"200+"}
            sub={"Successful Projects"}
          />
        </div>
        <div className="flex items-center justify-center max-lg:flex-col -left-2 relative">
          <Stats
            id={"ball3"}
            className={"relative "}
            num={"150+"}
            sub={"Happy Client"}
          />
          <Stats
            id={"ball4"}
            className={"relative -left-4"}
            num={"160+"}
            sub={"5 Star Reviews"}
          />
        </div>
      </div>
      <div className="w-full h-full flex flex-col justify-end items-center py-6 container mx-auto max-lg:px-4">
        <div className="flex container mx-auto gap-4 max-md:flex-col">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-black/20 backdrop-blur-lg border-[1px] border-gray-50/10  rounded-lg p-6 shadow-md"
            >
              <div className="text-orange-500 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mt-4">
                {item.title}
              </h3>
              <p className="text-gray-300 mt-2 font-satoshi">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center flex-wrap container mx-auto gap-4 mt-4">
          {tinyTitle.map((item, index) => (
            <div
              key={index}
              className="flex font-satoshi items-center gap-2 bg-white/10 p-3 px-4 rounded-full backdrop-blur"
            >
              {item.icons}
              <h1 className="text-white text-lg text-nowrap">{item.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpServ;
