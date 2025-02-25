import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";



const Accordion = ({data}) => {
  const [openIndex, setOpenIndex] = useState(null);
  const thisRef=useRef(null)
  useGSAP(()=>{
    gsap.fromTo(
      thisRef.current.children,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: .4,
       stagger:.2
      }
    );
  },[])
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div ref={thisRef} className="w-full space-y-3  bg-opacity-30 backdrop-blur-lg rounded-lg">
      {data.map((item, index) => (
        <div key={index} className="bg-gray-900/20 group font-bold text-xl hover:bg-white/12 font-satoshi  cursor-pointer transition duration-300   bg-opacity-50 backdrop-blur-md rounded-4xl p-4  overflow-hidden">
          <button
            className="  w-full flex justify-between  cursor-pointer items-center p-4 text-white/80"
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
            <p className="w-full font-normal font-satoshi max-md:text-sm md:px-10">{item.answer}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
