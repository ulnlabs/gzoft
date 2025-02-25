import React from "react";
import { ReactLenis } from "lenis/react";
function LenisScroll({ children }) {
  return (
    <>
      <div className="max-sm:hidden">
        <ReactLenis
          options={{
            duration: 2,
          }}
          root
        >
          {children}
        </ReactLenis>
      </div>
      <div className="sm:hidden">{children}</div>
    </>
  );
}

export default LenisScroll;
