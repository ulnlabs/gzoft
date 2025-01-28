import React from "react";
import { herouser } from "../constant";
import PrimaryLink from "../ui/PrimaryLink";

function HeroHead() {
  return (
    <div className="container px-6 top-0 left-0 w-full h-fit mt-[6rem] py-[2rem] flex lg:items-center items-start max-lg:flex-col justify-start gap-6">
      <div className="flex flex-col gap-4 items-start justify-center lg:w-1/2">
        <h1 className="text-4xl font-bold w-2/3 text-left text-gray-800">
          Empowering Careers Through Training{" "}
          <span className="gradient-text">✦ IT Expertise</span>
        </h1>
        <p>
          G Zoft Technology provides custom IT solutions, from web and app
          development to expert training in MERN, DSA, Java, and Python Full
          Stack. We empower businesses with innovative technologies and equip
          individuals with the skills to succeed in tech.
        </p>
      </div>
      <div className="lg:w-1/2 flex flex-col items-end justify-end">
        <div className="w-fit">
          <div className="flex items-start gap-2">
            <img src={herouser} alt="hero user" />
            <p
            className="text-xl font-bold text-gray-800"
            >
              Over 15k+ Customers & <br /> Companies Trust Us.
            </p>
          </div>
          <PrimaryLink href="/services" text="Explore Our Services" className={" px-4 p-3"} />
        </div>
      </div>
    </div>
  );
}

export default HeroHead;
