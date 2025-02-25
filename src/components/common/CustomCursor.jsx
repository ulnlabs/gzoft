// curosor follow mouse
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useContext, useRef } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import Cursor from "./Cursor";
import CursorView from "./CursorView";
function CustomCursor() {
  const cursor = useRef(null);
  const { pointer } = useContext(GlobalContext);
  useGSAP(() => {
    const moveCursor = (e) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    gsap.set(cursor.current, { xPercent: -50, yPercent: -50 });
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  if (!pointer) {
    return null;
  }
  if (pointer === "video") {
    return (
      <div
        ref={cursor}
        className="fixed pointer-events-none z-50 grid place-items-center"
      >
        <Cursor className="-top-[50%] -left-[50%] cursor-none" />
      </div>
    );
  }
  if (pointer === "view") {
    return <CursorView />;
  }
  return (
    <div
      ref={cursor}
      className="fixed top-0 left-0 w-5 h-5 bg-black rounded-full pointer-events-none z-50"
    ></div>
  );
}

export default CustomCursor;
