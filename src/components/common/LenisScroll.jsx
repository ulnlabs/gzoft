import React from "react";
import { ReactLenis } from "lenis/react";
function LenisScroll({ children }) {
  return (
    <div className="max-sm:hidden">
      <ReactLenis
        options={{
          duration: 2,
        }}
        root
      >
        {children}
      </ReactLenis>
      <div className="sm:hidden">{children}</div>
    </div>
  );
}

export default LenisScroll;
