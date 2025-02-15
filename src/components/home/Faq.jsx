import React from "react";
import Acordian from "../common/Acordian";
import Tag from "../common/Tag";
import { motion } from "framer-motion";
function Faq() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 90 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="p-10 container mx-auto max-lg:px-4"
    >
      <div
        className="
      flex flex-col items-center justify-center py-[2rem] gap-4
      "
      >
        <Tag text="Frequently Asked Questions" />
        <h1 className="text-4xl text-center text-white max-md:text-2xl">
          Got Questions?
          <br />
          We've Got Answers!
        </h1>
      </div>
      <Acordian
        data={[
          {
            question: "What is SEO and why is it important?",
            answer:
              "SEO (Search Engine Optimization) is the practice of optimizing a website to rank higher on search engines like Google. It helps increase visibility, drive organic traffic, and improve credibility.",
          },
          {
            question: "How long does it take to see results from SEO?",
            answer:
              "SEO is a long-term strategy. It typically takes 3-6 months to see significant improvements, but results depend on competition, website quality, and ongoing efforts.",
          },
          {
            question: "What are the key factors that influence SEO rankings?",
            answer:
              "Key factors include keyword optimization, high-quality content, backlinks, mobile-friendliness, page speed, and user experience.",
          },
          {
            question:
              "Do I need to hire an SEO agency, or can I do SEO myself?",
            answer:
              "You can do SEO yourself with proper learning, but hiring an agency can save time and provide expertise to improve results faster.",
          },
          {
            question: "How much does SEO cost?",
            answer:
              "SEO costs vary based on whether you do it yourself, hire freelancers, or work with an agency. It can range from free (DIY) to thousands of dollars per month for professional services.",
          },
          {
            question: "Can I rank #1 on Google for any keyword?",
            answer:
              "Ranking #1 depends on competition, keyword difficulty, and SEO efforts. Highly competitive keywords may require significant time and resources.",
          },
          {
            question:
              "Is SEO a one-time effort, or does it require ongoing maintenance?",
            answer:
              "SEO requires ongoing maintenance to adapt to search engine updates, competition, and changing user behaviors.",
          },
        ]}
      />
    </motion.div>
  );
}

export default Faq;
