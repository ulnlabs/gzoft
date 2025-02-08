import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const  Brands = () => {
  const containerRef = useRef(null);

  const [brands] = useState([
    { name: "logo ipsum", icon: "/brands/logoipsum-348.svg" },
    { name: "logo ipsum", icon: "/brands/logoipsum-348.svg" },
    { name: "logo ipsum", icon: "/brands/logoipsum-348.svg" },
    { name: "logo ipsum", icon: "/brands/logoipsum-348.svg" },
    { name: "logo ipsum", icon: "/brands/logoipsum-348.svg" },
    { name: "logo ipsum", icon: "/brands/logoipsum-348.svg" },
    { name: "logo ipsum", icon: "/brands/logoipsum-348.svg" },
    { name: "logo ipsum", icon: "/brands/logoipsum-348.svg" },
  ]);

  useEffect(() => {
    const container = containerRef.current;
    // The total width of one set of the items (since we duplicate for a seamless loop)
    const totalWidth = container.scrollWidth / 2;

    gsap.to(container, {
      // Animate the container to move left by totalWidth pixels
      x: `-=${totalWidth}px`,
      duration: 10,
      ease: "linear",
      repeat: -1,
      // Use a modifier to wrap the x value, ensuring a seamless loop
      modifiers: {
        x: (x) => {
          // x comes in as a string like "-123.45px", so parse it into a number.
          const xVal = parseFloat(x);
          // Wrap the value between 0 and totalWidth.
          // This keeps x within the bounds needed for a continuous scroll.
          let wrapped = xVal % totalWidth;
          if (wrapped < 0) wrapped += totalWidth;
          return wrapped + "px";
        }
      }
    });
  }, []);

  return (
    <div className="overflow-hidden relative border rounded-4xl w-full">
      <div ref={containerRef} className="flex gap-3 w-max">
        {/* Duplicate the brands for a continuous loop */}
        {[...brands, ...brands].map(({ name, icon }, i) => (
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
