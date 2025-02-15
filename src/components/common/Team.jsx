import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import TeamIcons from "./TeamIcons";

function Team({
  title = "CEO",
  name = "Jimmy Smith",
  position = "Founder",
  image = "/images/team.avif",
  links = ["#", "#", "#"],
  cardname = "test",
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [toggle, setToggle] = useState(false);
  const teamtitle = useRef(null);
  const teamimg = useRef(null);
  const teamcircle = useRef(null);
  useEffect(() => {
    if (isHovered) {
      gsap.to(teamtitle.current, {
        top: -15,
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
      className="max-w-lg min-w-[340px]"
    >
      <div className="w-full min-h-[240px] cursor-pointer rounded-4xl overflow-hidden bg-white/5 relative border flex items-start justify-center flex-col">
        <div
          ref={teamtitle}
          className="absolute  w-[102%] top-0 -left-[1%] flex items-end py-6 justify-between"
        >
          <h1 className="text-3xl font-bold w-full text-primary drop-shadow-[1px_2px_30px_#000000] ">
            {title}
          </h1>
          <p className="text-lg font-semibold text-white drop-shadow-[1px_2px_30px_#000000]">
            {position}
          </p>
        </div>
        <div className="pt-20 w-full relative z-2 overflow-hidden">
          <img
            ref={teamimg}
            src={image}
            className="h-[420px] mx-auto drop-shadow-[1px_2px_60px_#000000] saturate-0"
            alt=""
          />
        </div>
        <div className="w-full absolute flex justify-center z-0 my-auto -bottom-2/6">
          <div
            ref={teamcircle}
            className="min-h-[500px] min-w-[500px] bg-primary rounded-full"
          ></div>
        </div>
        <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent z-2 flex items-center justify-center">
          <TeamIcons toggle={toggle} setToggle={setToggle} link={links} />
        </div>
      </div>
      <div className="w-full p-4 font-satoshi cursor-pointer rounded-3xl text-center overflow-hidden bg-white/5 relative border flex items-center justify-center flex-col">
        <h1 className="text-white font-black text-xl">{name}</h1>
        <p className="text-white/80 font-light">Founder of Company</p>
      </div>
    </div>
  );
}

export default Team;
