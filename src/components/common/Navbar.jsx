import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { TiArrowUp } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
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
    name: "WORK",
    path: "/work",
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
  useEffect(() => {
    if (show) {
      gsap.to("#bar1", {
        duration: 0.5,
        rotation: 45,
        margin: "0",
      });
      gsap.to("#bar2", {
        duration: 0.5,
        rotation: -45,
        margin: "0",
      });
      gsap.to("#nav", {
        duration: 0.5,
        opacity: 1,
        height: "auto",
        ease: "power4.inOut",
      });
      gsap.to("#navlink", {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power4.inOut",
        stagger: 0.1,
      });
      gsap.to("#getInTouch", {
        duration: 0.5,
        opacity: 1,
        y: 0,
        delay: 0.5,
        ease: "power4.inOut",
      });
    } else {
      gsap.to("#bar1", {
        duration: 0.5,
        rotation: 0,
        margin: "-10px 0 0 0",
      });
      gsap.to("#bar2", {
        duration: 0.5,
        rotation: 0,
        margin: "10px 0 0 0",
      });
      gsap.to("#nav", {
        duration: 0.5,
        opacity: 0,
        height: 0,
        ease: "power4.inOut",
      });
      gsap.to("#navlink", {
        duration: 0.5,
        opacity: 0,
        y: 0,
        ease: "power4.inOut",
        stagger: 0.1,
      });
      gsap.to("#getInTouch", {
        duration: 0.5,
        opacity: 0,
        y: 0,
        delay: 0.5,
        ease: "power4.inOut",
      });
    }
  }, [show]);
  return (
    <nav className="fixed top-0 left-0 w-screen backdrop-blur-[3px] max-lg:bg-black z-10">
      <div className="w-full max-md:px-4 px-8 py-2 flex justify-between items-center ">
        <a href="/" className="cursor-pointer">
          <img src="/icons/logo.svg" alt="" className="h-10" />
        </a>
        <div className="max-lg:hidden bg-black rounded-full border flex  w-fit items-center justify-center p-2">
          {navLinks.map((items, i) => {
            return (
              <a
                className="relative overflow-hidden flex items-center justify-center group rounded-full"
                key={i}
                href={items.path}
              >
                <p
                  className={`${
                    useLocation().pathname == items.path
                      ? "rounded-full text-primary bg-dark z-1"
                      : ""
                  } p-3 px-5 text-white text-xs relative flex items-center`}
                >
                  {items.name}
                </p>
                <div className="w-0 h-0 group-hover:h-[150px] group-hover:w-[150px] absolute bg-white/10 rounded-full z-0 ease-linear duration-500"></div>
              </a>
            );
          })}
        </div>
        <div className="max-lg:hidden">
          <Link
          to={"/contact"}
          className="flex group cursor-pointer items-center justify-center bg-primary p-2 text-dark rounded-full text-xs">
            GET IN TOUCH{" "}
            <span>
              <TiArrowUp className="text-[25px] rotate-45 group-hover:rotate-90 ease-linear transition-all duration-200 rounded-full" />
            </span>
          </ Link>
        </div>
        <div
          onClick={() => setShow(!show)}
          className="lg:hidden cursor-pointer relative border w-8 h-8 p-1 bg-dark flex flex-col rounded items-center justify-center"
        >
          <div
            id="bar1"
            className="h-[2px] rounded absolute w-[80%] bg-white "
          ></div>
          <div
            id="bar2"
            className="h-[2px] rounded absolute w-[80%] bg-white "
          ></div>
        </div>
      </div>
      <div className="lg:hidden">
        <div
          id="nav"
          className="bg-black w-full h-0 top-0 left-0 overflow-hidden"
        >
          <div className="w-full flex flex-col items-center justify-center py-8 gap-4">
            {navLinks.map((items, i) => {
              return (
                <a
                  id="navlink"
                  key={i}
                  onClick={() => setShow(false)}
                  className={`${
                    useLocation().pathname.startsWith(items.path)
                      ? "text-primary"
                      : "text-white hover:text-white/80 transition-all ease-linear duration-200"
                  } p-3 text-lg`}
                  href={items.path}
                >
                  {items.name}
                </a>
              );
            })}
            <Link 
            id="getInTouch"
              to="/contact"
              className="flex cursor-pointer group items-center justify-center bg-primary p-2 text-dark rounded-full text-xs"
            >
              GET IN TOUCH{" "}
              <span>
                <TiArrowUp className="text-[25px] rotate-45 group-hover:rotate-90 ease-linear transition-all duration-200 rounded-full" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
