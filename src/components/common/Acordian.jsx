import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqData = [
    { question: "What is SEO and why is it important?", answer: "SEO (Search Engine Optimization) is the practice of optimizing a website to rank higher on search engines like Google. It helps increase visibility, drive organic traffic, and improve credibility." },
    { question: "How long does it take to see results from SEO?", answer: "SEO is a long-term strategy. It typically takes 3-6 months to see significant improvements, but results depend on competition, website quality, and ongoing efforts." },
    { question: "What are the key factors that influence SEO rankings?", answer: "Key factors include keyword optimization, high-quality content, backlinks, mobile-friendliness, page speed, and user experience." },
    { question: "Do I need to hire an SEO agency, or can I do SEO myself?", answer: "You can do SEO yourself with proper learning, but hiring an agency can save time and provide expertise to improve results faster." },
    { question: "How much does SEO cost?", answer: "SEO costs vary based on whether you do it yourself, hire freelancers, or work with an agency. It can range from free (DIY) to thousands of dollars per month for professional services." },
    { question: "Can I rank #1 on Google for any keyword?", answer: "Ranking #1 depends on competition, keyword difficulty, and SEO efforts. Highly competitive keywords may require significant time and resources." },
    { question: "Is SEO a one-time effort, or does it require ongoing maintenance?", answer: "SEO requires ongoing maintenance to adapt to search engine updates, competition, and changing user behaviors." }
  ];

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl  mx-auto space-y-3  bg-opacity-30 backdrop-blur-lg p-4 rounded-lg">
      {faqData.map((item, index) => (
        <div key={index} className="bg-gray-900/20  bg-opacity-50 backdrop-blur-md rounded-4xl p-4  overflow-hidden">
          <button
            className="w-full flex justify-between items-center p-4 text-white"
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="bg-pink-400 rounded-md" />
            </motion.div>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden text-gray-300 px-4"
          >
            <p className="w-[70%]  px-10">{item.answer}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
