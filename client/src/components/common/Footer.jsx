import React from "react";
import {
  FaArrowUp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
const media = [
  {
    id: 1,
    icons: <FaFacebook />,
    link: "https://www.facebook.com/",
  },
  {
    id: 2,
    icons: <FaLinkedin />,
    link: "https://www.linkedin.com/",
  },
  {
    id: 3,
    icons: <FaInstagram />,
    link: "https://www.instagram.com/",
  },
];

const footerLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "/services",
  },
  {
    id: 3,
    title: "works",
    link: "/works",
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
  },
];

function Footer() {
  return (
    <div className="bg-[var(--bgr1)] sticky">
      <div className="container mx-auto flex justify-between items-end max-md:flex-col ">
        <div className="shadow-lg bg-[var(--bgr1)] p-4"></div>
        <div className="flex flex-col items-start justify-start md:items-end md:justify-end">
          <div className="flex text-sm">
            {media.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className=" text-xl text-zinc-800 mx-2"
              >
                {item.icons}
              </a>
            ))}
          </div>
          <div className="flex text-sm py-2">
            {footerLinks.map((item) => (
              <a
                key={item.id}
                href={item.link}
                className=" text-zinc-800 mx-2 flex items-center"
              >
                {item.title}
                {<FaArrowUp className="rotate-45 text-[10px] font-light" />}
              </a>
            ))}
          </div>
          <div className="flex items-center justify-center gap-4 text-sm py-1">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="flex items-center justify-center gap-4 text-sm py-1">
            <p>Copyright 2020-23 - All Right Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
