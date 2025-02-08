import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";



const Accordion = ({data}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full container mx-auto space-y-3    bg-opacity-30 backdrop-blur-lg rounded-lg">
      {data.map((item, index) => (
        <div key={index} className="bg-gray-900/20 group hover:bg-white/12  cursor-pointer transition duration-300   bg-opacity-50 backdrop-blur-md rounded-4xl p-4  overflow-hidden">
          <button
            className="  w-full flex justify-between  cursor-pointer items-center p-4 text-white"
            onClick={() => toggleAccordion(index)}
          >
            <h1 className="group-hover:translate-x-4 transition-transform duration-200 max-md:text-sm">

            {item.question}
            </h1>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="bg-primary cursor-pointer text-black rounded-md" />
            </motion.div>
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden cursor-pointer font-satoshi text-gray-300 px-4 max-md:text-xs"
          >
            <p className="w-full  px-10">{item.answer}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
