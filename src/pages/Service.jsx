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
import Footer from "../components/common/Footer";

function Service() {
  const services = [
    {
      title: "Training Wing",
      description:
        "We provide industry-focused training programs designed to equip individuals with the latest technical skills and hands-on experience.",
      icon: <GraduationCap className="text-primary" />,
    },
    {
      title: "IT Consultation",
      description:
        "Our expert consultants help businesses streamline their IT infrastructure, optimize workflows, and implement innovative solutions.",
      icon: <Briefcase className="text-primary" />,
    },
  ];

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
    {
      title: "Transparent Communication",
      description:
        "We believe in open and honest communication every step of the way.",
      icon: <MessageCircle className="text-primary" />,
    },
    {
      title: "Dedicated Support",
      description:
        "Your success is our priority, and we're here to support you every step of the way.",
      icon: <Headphones className="text-primary" />,
    },
    {
      title: "Expertise Across Industries",
      description:
        "Our team has extensive experience working across various industries.",
      icon: <Briefcase className="text-primary" />,
    },
  ];

  return (
    <div className="service-page container mx-auto">
      <header className="service-header">
        <h1 className="text-4xl font-bold text-white text-center pt-30 pb-30">
          Discover <br /> Our Services
        </h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 p-4">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>

      <section className="why-choose-us mt-16 text-center">
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
      </section>
    </div>
  );
}

export default Service;
