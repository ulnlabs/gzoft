import React from "react";
import ServiceCard from "../components/common/ServiceCard";

import { motion } from "framer-motion";
import { services } from "../Data/Services";
function Service() {




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
