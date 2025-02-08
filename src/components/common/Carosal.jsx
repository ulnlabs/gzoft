import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";




const Carousel = ({ images}) => {
  
  
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="relative object-cover w-full  max-w-4xl mx-auto  overflow-hidden rounded-lg shadow-lg">

      <div className="relative md:h-[400px] h-[400px]">
        <AnimatePresence initial={false}>
          <motion.div
            key={activeIndex}
            initial={{ x: "100%" }} 
            animate={{ x: "0%" }} 
            exit={{ x: "-100%" }} 
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 brightness-70 w-full h-full bg-cover  bg-center "
            style={{ backgroundImage: `url(${images[activeIndex]})` }}
          />
        </AnimatePresence>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-5 h-1  rounded-2xl  transition-colors ${
              index === activeIndex ? "bg-primary" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;