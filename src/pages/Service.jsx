import React from "react";
import ServiceCard from "../components/common/ServiceCard";
import {
  GraduationCap,
  Rocket,
  Share2,
  Target,
  MessageCircle,
  Headphones,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";
function Service() {
  const services = [
    {
      title: "Training Wing",
      description:
        "We provide industry-focused training programs designed to equip individuals with the latest technical skills and hands-on experience.",
      icon: <GraduationCap className="text-primary" />,
    },
    {
      title: "IT Solutions",
      description:
        "Our expert consultants help businesses streamline their IT infrastructure, optimize workflows, and implement innovative solutions.",
      icon: <Briefcase className="text-primary" />,
    },
  ];

  const whyChooseUs = [
    {
      title: "Proven Expertise",
      description:
        "Industry-leading IT training and innovative solutions for business growth and success.",
      icon: <Rocket className="text-primary" />,
    },
    {
      title: "Customized Learning",
      description:
        "Hands-on programs with practical skills and real-world experience to help professionals excel.",
      icon: <Share2 className="text-primary" />,
    },
    {
      title: "Client-Focused Approach",
      description:
        "Providing industry-relevant training and IT solutions to boost efficiency and innovation.",
      icon: <Target className="text-primary" />,
    },
    {
      title: "Results-Driven Approach",
      description:
        "Our IT training and services are designed to deliver real-world skills and measurable success.",
      icon: <MessageCircle className="text-primary" />,
    },
    {
      title: "Innovative Solutions",
      description:
        "We stay ahead of the curve, leveraging the latest technologies to deliver cutting-edge solutions.",
      icon: <Headphones className="text-primary" />,
    },
    {
      title: "Commitment to Excellence",
      description:
        "We prioritize quality, ensuring you receive the best training, support, and resources for long-term growth.",
      icon: <Briefcase className="text-primary" />,
    }
  ];

  return (
    <div className="service-page container mx-auto">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="service-header"
      >
        <h1 className="text-4xl font-bold text-white text-center pt-30 pb-30">
          Discover <br /> Our Services
        </h1>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{
          once: true,
        }}
        className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 p-4"
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{
          once: true,
        }}
        className="why-choose-us mt-16 text-center"
      >
        <div className="inline-block bg-primary text-black font-semibold px-4 py-1 rounded-full text-sm">
          WHY CHOOSE US
        </div>

        <h2 className="text-4xl font-bold text-white mt-4">
          Why we are your best choice
        </h2>

        <div className="why-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 p-4">
          {whyChooseUs.map((item, index) => (
            <div
              key={index}
              className="bg-black/10 backdrop-blur-[2px] border border-gray-700 rounded-lg p-6 shadow-md"
            >
              <div className="text-orange-500 flex justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mt-4">
                {item.title}
              </h3>
              <p className="text-gray-400 mt-2 font-satoshi">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}

export default Service;
