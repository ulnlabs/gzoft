import React from "react";
import { ReactLenis } from "lenis/react";
function LenisScroll({ children }) {
  return (
    <ReactLenis
      options={{
        duration: 1.5,
      }} root
    >
      {children}
    </ReactLenis>
  );
}

export default LenisScroll;
