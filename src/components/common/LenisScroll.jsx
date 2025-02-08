import React from "react";
import { ReactLenis } from "lenis/react";
function LenisScroll({ children }) {
  return (
    <ReactLenis
      options={{
        duration: 2,
        wrapper: {
          overflow: "hidden",
          position: "relative",
        },
      }}
      root
    >
      {children}
    </ReactLenis>
  );
}

export default LenisScroll;
