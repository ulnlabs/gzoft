import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import TeamIcons from "./TeamIcons";

function Team({
  title = "CEO",
  title2,
  name = "Jimmy Smith",
  position,
  image = "/images/team.avif",
  links = ["#", "#", "#"],
  
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [toggle, setToggle] = useState(false);
  const teamtitle = useRef(null);
  const teamimg = useRef(null);
  const teamcircle = useRef(null);
  useEffect(() => {
    if (isHovered) {
      gsap.to(teamtitle.current, {
        top: -20,
        duration: 1,
        ease: "power4",
      });
      gsap.to(teamimg.current, {
        y: 20,
        duration: 1,
        ease: "power4",
      });
    } else {
      gsap.to(teamtitle.current, {
        top: 0,
        duration: 1,
        ease: "power4",
      });
      gsap.to(teamimg.current, {
        y: 1,
        duration: 1,
        ease: "power4",
      });
    }
    if (toggle) {
      setIsHovered(true);
      gsap.to(teamcircle.current, {
        minHeight: "500px",
        minWidth: "500px",
        duration: 1,
        ease: "power4",
      });
      gsap.to(teamimg.current, {
        filter: "saturate(1)",
        duration: 1,
        ease: "power4",
      });
    } else {
      gsap.to(teamcircle.current, {
        minHeight: "0",
        minWidth: "0",
        duration: 1,
        ease: "power4",
      });
      gsap.to(teamimg.current, {
        filter: "saturate(0)",
        duration: 1,
        ease: "power4",
      });
    }
  }, [isHovered, toggle]);
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="max-w-lg  min-w-[420px] px-10"
    >
      <div className="w-full min-h-[480px] cursor-pointer rounded-4xl overflow-hidden bg-white/5 relative border flex items-start justify-center flex-col">
        <div
          ref={teamtitle}
          className="absolute  w-[102%] top-0 -left-[1%]  pt-10 "
        >
          <h1 className="text-4xl font-bold w-full text-primary drop-shadow-[1px_2px_30px_#000000] ">
            {title}
          </h1>
          <p className="text-lg font-semibold font-satoshi float-right -mt-4  uppercase text-white drop-shadow-[1px_2px_30px_#000000]">
          {title2}
          </p>
        </div>
        <div className="pt-16 w-full  relative z-2 overflow-hidden">
          <img
            ref={teamimg}
            src={image}
            className="h-[500px] px-2 mx-auto drop-shadow-[1px_2px_60px_#000000] saturate-0"
            alt=""
          />
        </div>
        <div className="w-full absolute flex justify-center z-0 my-auto -bottom-2/6">
          <div
            ref={teamcircle}
            className="min-h-[550px] min-w-[400px] bg-primary rounded-full"
          ></div>
        </div>
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-2 flex items-center justify-center">
          <TeamIcons toggle={toggle} setToggle={setToggle} link={links} />
        </div>
      </div>
      <div className="w-full p-4 font-satoshi cursor-pointer rounded-3xl text-center overflow-hidden bg-white/5 relative border flex items-center justify-center flex-col">
        <h1 className="text-white font-black text-xl">{name}</h1>
        <p className="text-white/80 font-light">{position} </p>
      </div>
    </div>
  );
}

export default Team;
