import React, { useState } from "react";
import { TiArrowUp } from "react-icons/ti";
import { useLocation } from "react-router-dom";
const navLinks = [
  {
    id: 1,
    name: "HOME",
    path: "/",
  },
  {
    id: 2,
    name: "ABOUT",
    path: "/about",
  },
  {
    id: 3,
    name: "SERVICES",
    path: "/services",
  },
  {
    id: 4,
    name: "PROJECT",
    path: "/project",
  },
  {
    id: 5,
    name: "REVIEWS",
    path: "/reviews",
  },
  {
    id: 6,
    name: "CONTACT",
    path: "/contact",
  },
];

function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-screen backdrop-blur-2xl max-lg:bg-black">
      <div className="w-full px-8 py-2 flex justify-between items-center ">
        <div className="logo">
          <img src="/logo.svg" alt="" className="h-10" />
        </div>
        <div className="max-lg:hidden bg-black rounded-full border flex  w-fit items-center justify-center p-2">
          {navLinks.map((items, i) => {
            return (
              <a
                key={i}
                className={`${
                  useLocation().pathname.startsWith(items.path)
                    ? " rounded-full text-primary bg-dark"
                    : ""
                } p-3 px-5 text-white text-xs relative flex items-center`}
                href={items.path}
              >
                <p>
                    
                </p>
                <div className="w-2 h-2 absolute bg-white rounded-full z-0"></div>
                {items.name}
              </a>
            );
          })}
        </div>
        <div className="max-lg:hidden">
          <button className="flex group items-center justify-center bg-primary p-2 text-dark rounded-full text-xs">
            GET IN TOUCH{" "}
            <span>
              <TiArrowUp className="text-[25px] rotate-45 group-hover:rotate-90 ease-linear transition-all duration-200 rounded-full" />
            </span>
          </button>
        </div>
        <div className="lg:hidden relative border w-8 h-8 p-1 bg-dark flex flex-col rounded items-center justify-center">
          <div className="h-1 absolute w-[80%] bg-white "></div>
          <div className="h-1 absolute w-[80%] bg-white "></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
