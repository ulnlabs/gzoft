import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";



const Accordion = ({data}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl  mx-auto space-y-3  bg-opacity-30 backdrop-blur-lg rounded-lg">
      {data.map((item, index) => (
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
              <ChevronDown className="bg-primary text-black rounded-md" />
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
