import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="w-screen px-4 flex flex-col gap-4">
      <div className="flex justify-between gap-4 items-center max-lg:flex-col container mx-auto py-8">
        <div className="w-full flex items-center flex-col">
          <h1 className=" text-9xl font-bold text-white">Let`s</h1>
          <p className=" text-9xl text-primary -top-8 relative">Talk</p>
        </div>
        <div className="w-full">
          <form
            action=""
            method="post"
            className="bg-white/10 p-6 rounded-2xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <label className="text-xs text-white/60 font-thin" htmlFor="name">
                Name
              </label>
              <input
                className="p-2 py-3 bg-white/10 rounded-xl text-white outline-none placeholder:text-white/40 font-thin text-sm"
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
                className="p-2 py-3 bg-white/10 rounded-xl text-white outline-none placeholder:text-white/40 font-thin text-sm"
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
                className="p-2 py-3 bg-white/10 rounded-xl text-white outline-none placeholder:text-white/40 font-thin text-sm resize-none"
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
      <div className="container mx-auto flex justify-between items-center py-4 bg-white/10 rounded-xl ">
        <div className="font-satosi flex flex-col gap-2 px-4 w-full text-sm font-light">
          <div className="flex flex-col items-start p-4 rounded-xl bg-white/20 gap-2">
            <Mail className="text-primary" />
            <p>agencee@email.com</p>
          </div>
          <div className="flex flex-col items-start p-4 rounded-xl bg-white/20 gap-2">
            <Phone className="text-primary" />
            <p>+ 54 2541 22 55 66</p>
          </div>
          <div className="flex flex-col items-start p-4 rounded-xl bg-white/20 gap-2">
            <MapPin className="text-primary" />
            <p>1234 Street Name, City Name</p>
          </div>
        </div>
        <div className="w-full"></div>
      </div>
    </footer>
  );
}

export default Footer;
