import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full px-4 flex flex-col gap-4">
      <div className="flex justify-between gap-4 items-center max-lg:flex-col container mx-auto py-8">
        <div className="w-full flex items-center flex-col">
          <h1 className=" text-9xl max-sm:6xl font-bold text-white">Let`s</h1>
          <p className=" text-9xl max-sm:6xl text-primary -top-8 relative">Talk</p>
        </div>
        <div className="w-full">
          <form
            action=""
            method="post"
            className="bg-white/10 p-6 rounded-2xl flex flex-col gap-4 font-satoshi"
          >
            <div className="flex flex-col gap-2">
              <label className="text-xs text-white/60 font-thin" htmlFor="name">
                Name
              </label>
              <input
                className="p-2 py-3 bg-white/10 rounded-xl text-white outline-none placeholder:text-white/40 font-thin "
                type="text"
                id="name"
                placeholder="John Smith"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-xs text-white/60 font-thin"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="p-2 py-3 bg-white/10 rounded-xl text-white outline-none placeholder:text-white/40 font-thin "
                type="email"
                id="email"
                placeholder="jane@example.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-xs text-white/60 font-thin"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="p-2 py-3 bg-white/10 rounded-xl text-white outline-none placeholder:text-white/40 font-thin  resize-none"
                placeholder="Write your message"
              ></textarea>
              <input
                type="submit"
                value={"Submit"}
                className="p-2 bg-primary rounded-xl"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="container mx-auto flex justify-between items-start py-4 bg-white/10 rounded-xl max-lg:flex-col gap-4">
        <div className="font-satosi flex flex-col gap-2 px-4 w-full text-sm font-light">
          <div className="flex flex-col items-start p-4 rounded-xl bg-white/20 gap-2">
            <Mail className="text-primary" />
            <p className="text-white font-satoshi text-lg">agencee@email.com</p>
          </div>
          <div className="flex flex-col items-start p-4 rounded-xl bg-white/20 gap-2">
            <Phone className="text-primary" />
            <p className="text-white font-satoshi text-lg">
              + 54 2541 22 55 66
            </p>
          </div>
          <div className="flex flex-col items-start p-4 rounded-xl bg-white/20 gap-2">
            <MapPin className="text-primary" />
            <p className="text-white font-satoshi text-lg">
              1234 Street Name, City Name
            </p>
          </div>
        </div>
        <div className="w-full flex justify-between gap-4 items-start px-8 max-md:flex-col max-md:text-center">
          <div className="flex flex-col gap-1 w-full">
            <h1 className="text-primary">Menu</h1>
            <a className="font-thin  hover:text-white text-white/80 cursor-pointer hover:underline font-satoshi ">
              Home
            </a>
            <a className="font-thin  hover:text-white text-white/80 cursor-pointer hover:underline font-satoshi ">
              About
            </a>
            <a className="font-thin  hover:text-white text-white/80 cursor-pointer hover:underline font-satoshi ">
              Services
            </a>
            <a className="font-thin  hover:text-white text-white/80 cursor-pointer hover:underline font-satoshi ">
              Projects
            </a>
            <a className="font-thin  hover:text-white text-white/80 cursor-pointer hover:underline font-satoshi ">
              Review
            </a>
            <a className="font-thin  hover:text-white text-white/80 cursor-pointer hover:underline font-satoshi ">
              Contact
            </a>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <h1 className="text-primary">Services</h1>
            <a className="font-thin  hover:text-white text-white/80 cursor-pointer hover:underline font-satoshi ">
              Training Wing
            </a>
            <a className="font-thin  hover:text-white text-white/80 cursor-pointer hover:underline font-satoshi ">
              Web Development
            </a>
            <a className="font-thin  hover:text-white text-white/80 cursor-pointer hover:underline font-satoshi ">
              SEO
            </a>
            <a className="font-thin  hover:text-white text-white/80 cursor-pointer hover:underline font-satoshi ">
              Marketing
            </a>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <h1 className="text-primary">Other</h1>
            <a className="font-thin  hover:text-white text-white/80 cursor-pointer hover:underline font-satoshi ">
              FAQ
            </a>
            <a className="font-thin  hover:text-white text-white/80 cursor-pointer hover:underline font-satoshi ">
              License
            </a>
          </div>
        </div>
      </div>
      <div className="w-full bg-white/10 py-4 text-white text-center container mx-auto rounded-xl flex flex-col gap-4">
        <h1>Follow us:</h1>
        <div className="flex gap-4 mx-auto justify-center items-center">
          <a 
          href="#" className="text-white/60 hover:text-white p-3 border rounded-xl border-gray-300/30 text-lg">
            <FaFacebook />
          </a>
          <a 
          href="#" className="text-white/60 hover:text-white p-3 border rounded-xl border-gray-300/30 text-lg">
            <FaTwitter />
          </a>
          <a 
          href="#" className="text-white/60 hover:text-white p-3 border rounded-xl border-gray-300/30 text-lg">
            <FaInstagram />
          </a>
          <a 
          href="#" className="text-white/60 hover:text-white p-3 border rounded-xl border-gray-300/30 text-lg">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
