import React from "react";
import { FaStar } from "react-icons/fa";
import Tags from "../common/Tag";
import Button from "../common/Button";
import ServiceCard from "../common/ServiceCard";
import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);
const services = [
  {
    title: "Training Wing",
    description:
      "We provide industry-focused training programs designed to equip individuals with the latest technical skills and hands-on experience.",
    icon: <GraduationCap className="text-primary" />,
    link: "#",
  },
  {
    title: "IT Consultation",
    description:
      "Our expert consultants help businesses streamline their IT infrastructure, optimize workflows, and implement innovative solutions.",
    icon: <Briefcase className="text-primary" />,
    link: "#",
  },
];

function Services() {
  useGSAP(() => {
    const tl = gsap.timeline({});
    tl.from("#servicesContainer", {
      y: 90,
      duration: 1,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#servicesContainer",
      },
    });
  });
  return (
    <div className="container relative mx-auto lg:pt-[8rem] max-md:px-4">
      <div className="absolute -top-[70px] w-fit h-fit border max-lg:hidden border-white/80 text-white rounded-4xl backdrop-blur p-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          viewport={{
            once: true,
          }}
          className="flex flex-col border-b border-white/8 pb-4"
        >
          <p className=" font-bold uppercase">#1 It Consultent</p>
          <p className=" uppercase">BASED IN INDIA</p>
        </motion.div>
        <div className=" flex justify-between items-center w-fit py-4">
          <div className="flex w-full ">
            <div className="h-10 w-10 relative rounded-full border bg-[url(/images/users/1.avif)] bg-cover" />
            <div className="h-10 w-10 relative -left-4 rounded-full border  bg-[url(/images/users/2.avif)] bg-cover" />
            <div className="h-10 w-10 relative -left-8 rounded-full border  bg-[url(/images/users/3.avif)] bg-cover" />
            <div className="h-10 w-10 relative -left-12 rounded-full border  bg-[url(/images/users/4.avif)] bg-cover" />
          </div>
          <div className="flex flex-col items-start justify-center w-full">
            <div className="stars flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar key={star} className="text-sm text-primary" />
              ))}
            </div>
            <p className="text-xs">200+ 5 Start Review</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          viewport={{
            once: true,
          }}
          className="flex gap-8 pt-[4em] pb-4 max-md:flex-col max-md:justify-center max-md:items-center"
        >
          <Tags text="Services" />
          <h1 className="text-4xl font-bold text-white/90 w-fit max-md:text-center max-md:text-2xl">
            What we are offering
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.2 },
          }}
          viewport={{
            once: true,
          }}
          className="w-full flex md:justify-end justify-center items-center"
        >
          <Link to={"/services"}>
            <Button text="VIEW ALL SERVICES" size={2} className={" text-sm"} />
          </Link>
        </motion.div>
        <div
          id="servicesContainer"
          className="grid grid-cols-2 max-lg:grid-cols-1 gap-4 py-6"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
