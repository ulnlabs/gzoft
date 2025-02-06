import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Brands = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const brand  = [
    { name: "logo ipsum", icon: "/brands/logoipsum-348.svg" },
    { name: "logo ipsum", icon: "/brands/logoipsum-348.svg" },
    { name: "logo ipsum", icon: "/brands/logoipsum-348.svg" },
    { name: "logo ipsum", icon: "/brands/logoipsum-348.svg" },
  ]
  const [brands, setBrands] = useState([...brand,...brand]);

  useEffect(() => {
    const animateRow = (ref, direction) => {
      gsap.fromTo(
        ref.current,
        { x: direction === "left" ? "0%" : "-100%" },
        {
          x: direction === "left" ? "-100%" : "0%",
          duration: 50,
          ease: "linear",
          repeat: -1,
        }
      );
    };

    animateRow(row1Ref, "left"); // Moves left
    animateRow(row2Ref, "right"); // Moves right
  }, []);

  return (
    <div className="overflow-hidden relative border rounded-4xl w-full bg-black p-4">
      <div className="relative w-full overflow-hidden">
        <div ref={row1Ref} className="flex gap-3 w-max">
          {[...brands, ...brands].map(({ name, icon }, i) => ( // Duplicating for smooth loop
            <div key={i} className="bg-white/10 rounded-4xl h-fit w-fit">
              <img
                src={icon}
                alt={name}
                className="px-10 py-3 w-[200px] h-[100px] object-contain"
              />
            </div>
          ))}
           {[...brands, ...brands].map(({ name, icon }, i) => ( // Duplicating for smooth loop
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

      <div className="relative w-full overflow-hidden mt-4">
        <div ref={row2Ref} className="flex gap-3 w-max">
          {[...brands, ...brands].map(({ name, icon }, i) => ( // Duplicating for smooth loop
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
    </div>
  );
};

export default Brands;
