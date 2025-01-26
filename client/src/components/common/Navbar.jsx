import React from "react";
import { logo, navLinks } from "../constant";
import PrimaryLink from "../ui/PrimaryLink";
import { FaBars, FaX } from "react-icons/fa6";

function Navbar() {
  const [show, setShow] = React.useState(false);
  return (
    <nav className="w-screen  py-2 fixed grid place-items-center">
      <div className="container shadow-[0px_1px_10px_0px_#00000020] bg-white h-fit flex justify-between items-center p-2 rounded-2xl">
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" />
          <p className="text-2xl font-bold text-gray-800">Gzoft</p>
        </div>
        <div className="max-md:hidden w-full flex items-center justify-end gap-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              className="text-gray-800 font-semibold hover:text-"
            >
              {link.name}
            </a>
          ))}
          <PrimaryLink href={"#het started"} text={"Get Started"} />
        </div>
        <div className={`md:hidden px-2 cursor-pointer ${show ? "rotate-180" : "rotate-0"} transition-all ease-in duration-500`}
        onClick={() => setShow(!show)}
        >
          {show ? <FaX size={20} /> : <FaBars size={20} />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
