import React, { useEffect, useRef } from "react";
import Footer from "../components/common/Footer";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
function Contact() {
  const heading = useRef(null)
  const box = useRef(null)
  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline.from(heading.current, { y: 50, opacity: 0, duration: .5 });
    timeline.from(box.current.children, { y: 10, opacity: 0, duration: .5, stagger: 0.1 });
  }, [])

  return (
    <div className="pt-[6rem] w-screen flex  items-center flex-col">
      <h1 ref={heading} className="text-primary text-3xl py-6 font-bold text-center  opacity-100">
        Get in Touch with G-ZOFT
      </h1>
      <section className="pt-[6rem] md:min-w-[900px] lg:min-w-[1200px] backdrop-blur-xs">
        <section className="text-white  bg-white/5  col-span-7  rounded-4xl col-start-4">
          <section ref={box} className="grid grid-cols-2 gap-2 p-6  opacity-100">
            <section className=" p-10 bg-white/10 rounded-3xl flex flex-col gap-5 col-span-2 md:col-span-1">
              <h2 className="text-primary">Hotline:</h2>
              <a href="tel:0811234567">081 123 4567</a>
            </section>
            <section className=" p-10 bg-white/10 rounded-3xl flex flex-col gap-5 col-span-2 md:col-span-1">

              <h2 className="text-primary">Address:</h2>
              <p>1234, G-ZOFT Street, Lagos, Nigeria</p>
            </section>
            <section className=" p-10 bg-white/10 rounded-3xl flex flex-col gap-5 col-span-2 md:col-span-1 ">

              <h2 className="text-primary">Email:</h2>

              <a href="mailto:example@gmail.com">EXAMPLE@GMAIL.COM</a>

            </section>
            <section className=" p-10 bg-white/10 rounded-3xl flex flex-col gap-5 col-span-2 md:col-span-1">

              <h2 className="text-primary">Follow us:</h2>
              <div className="flex gap-4   ">
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
            </section>
            <section className=" p-10 bg-white/10 rounded-3xl col-span-2">
              <h2 className="text-primary">Operating Hours:</h2>
              <p>Monday – Friday: 9:00 AM – 8:30 PM</p>
              <p>Saturday: 10:00 AM – 6:30 PM</p>
              <p>Sunday: Closed</p>
            </section>
            <section className="  bg-white/10 rounded-3xl col-span-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019284634674!2d144.9630579153167!3d-37.81410797975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d1b1f5b1f5b1!2s1234%20G-ZOFT%20Street%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1633072800000!5m2!1sen!2sng"
                width="100%"
                height="450"
                style={{ border: 0, filter: 'grayscale(100%)' }}
                className="rounded-3xl"
                allowFullScreen=""
                loading="lazy"
                title="G-ZOFT Location"
              ></iframe>

            </section>
          </section>
        </section>
      </section>
      <Footer />

    </div>
  );
}

export default Contact;