import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const Brands = () => {
  const containerRef = useRef(null);
  
  // Original brands list
  const [brands,setBrands] = useState([
    { name: "logo ipsum", icon: "/brands/logoipsum-348.svg" },
    { name: "logo ipsum", icon: "/brands/logoipsum-348.svg" },
    { name: "logo ipsum", icon: "/brands/logoipsum-348.svg" },
    { name: "logo ipsum", icon: "/brands/logoipsum-348.svg" },
  ]);

  // Duplicate the brands array for a seamless scroll.
  

  useEffect(() => {
    const container = containerRef.current;
    // Calculate the width of one complete set of images.
    const totalWidth = container.scrollWidth / 2; 

    gsap.to(container, {
      x: `-=${totalWidth}px`,  // Move by one set's width
      duration: 10,            // Adjust duration as needed
      ease: "none",
      repeat: -1,              // Infinite loop
      modifiers: {
        x: (x) => {
          // Wrap the x position so the scroll is seamless
          return (parseFloat(x) % totalWidth) + "px";
        }
      }
    });
  }, []);

  return (
    <div className="overflow-hidden relative border rounded-4xl w-full">
      <div ref={containerRef} className="flex gap-3 w-max">
        {brands.map(({ name, icon }, i) => (
          <div key={i} className="bg-white/10 rounded-4xl h-fit w-fit">
            <img 
              src={icon} 
              alt={name} 
              className="px-10 py-3 w-[200px] h-[100px] object-contain" 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
