import React from "react";
import { logo, navLinks } from "../constant";
import PrimaryLink from "../ui/PrimaryLink";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const [show, setShow] = React.useState(false);
  const handleToggleMenu = () => {
    setShow(!show);
    if (!show) {
      gsap.to("#bar1", { rotate: 45, y: 0, duration: 0.5 });
      gsap.to("#bar2", { rotate: -45, y: 0, duration: 0.5 });
      gsap.to("#navmobile", { height: "auto", duration: 0.6 });
    } else {
      gsap.to("#bar1", { rotate: 0, y: "-5px", duration: 0.5 });
      gsap.to("#bar2", { rotate: 0, y: "5px", duration: 0.5 });
      gsap.to("#navmobile", { height: 0, duration: 0.5, delay: 0.3 });
    }
  };
  return (
    <nav className="w-screen py-4 max-md:px-4 fixed grid place-items-center">
      <div className="container ">
        <div className=" shadow-[0px_1px_10px_0px_#00000020] bg-white h-fit flex justify-between items-center p-2 rounded-2xl">
          <div className="flex items-center gap-2 justify-center">
            <img src={logo} alt="logo" className="w-[1.5rem] h-[1.5rem]" />
            <p className="text-xl font-semibold text-gray-800">Gzoft</p>
          </div>
          <div className="max-md:hidden w-full flex items-center justify-end gap-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-800 font-semibold hover:text-blue-400"
              >
                {link.name}
              </a>
            ))}
            <PrimaryLink href={"#het started"} text={"Get Started"} className={"px-4 py-1"} />
          </div>
          <div className="flex items-center justify-center gap-4">
            <div
              className={`relative md:hidden  cursor-pointer w-[1.2rem] h-[1.2rem] flex items-center justify-center px-2 mr-2`}
              onClick={handleToggleMenu}
            >
              <div
                id="bar1"
                className=" absolute  rounded -translate-y-[5px] h-0.5 w-full bg-zinc-800"
              ></div>
              <div
                id="bar2"
                className=" absolute  rounded translate-y-[5px] h-0.5 w-full bg-zinc-800"
              ></div>
            </div>
          </div>
        </div>
        <div
          id="navmobile"
          className=" shadow-[0px_1px_10px_0px_#00000020] bg-white mt-2 rounded-xl md:hidden h-0 overflow-hidden "
        >
          <div className="p-4 mt-2 flex flex-col gap-4">
            <AnimatePresence mode="wait">
              {show &&
                navLinks.map((link, index) => (
                  <motion.a
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.3,
                        ease: "anticipate",
                        delay: 0.1 * index,
                      },
                    }}
                    exit={{
                      opacity: 0,
                      y: -20,
                      transition: { duration: 0.3, delay: index * 0.05 },
                    }}
                    transition={{ duration: 0.3, ease: "anticipate" }}
                    id="navlinkmobile"
                    key={index}
                    href={link.url}
                    className="text-gray-800 font-semibold hover:text-sky-400 opacity-100 block scale-100"
                  >
                    {link.name}
                  </motion.a>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
