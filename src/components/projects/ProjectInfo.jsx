import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Label from "/src/components/about/Label";
import { InnerHeading } from "../about/Heading";

gsap.registerPlugin(ScrollTrigger);

function ProjectInfo() {
  const location = useLocation();
  const project = location.state?.project;

  // Refs for animations
  const titleRef = useRef(null);
  const techRef = useRef(null);
  const descRef = useRef(null);
  const featureRef = useRef(null);
  const imgGridRef = useRef(null);
  const topimage = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const projectrol = useRef(null);

 

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Title animation (Left to Right)
      gsap.from(titleRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Top image animation
      gsap.from(topimage.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Technology stack grid animation
      gsap.from(imgGridRef.current, {
        y: 30,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imgGridRef.current,
          start: "top 80%",
          end: "top 10%",
          scrub: 1,
        },
      });
      gsap.from(techRef.current, {
        x: -30,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: techRef.current,
          start: "top 80%",
          end: "top 10%",
          scrub: 1,
        },
      });
      gsap.from(projectrol.current, {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: projectrol.current,
          start: "top 90%",
          end: "top 10%",
          scrub: 1,
        },
      });

      // Description animation
      gsap.from(descRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      });

      // Features animation
      gsap.from(featureRef.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featureRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      });

      // Image 1 animation
      gsap.from(image1Ref.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: image1Ref.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      });

      // Image 2 animation
      gsap.from(image2Ref.current, {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: image2Ref.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      });

 
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-screen container mx-auto py-[5rem]">
      <h1 ref={titleRef} className="text-3xl text-white font-bold">
        {project.Title}
      </h1>
      <img
        ref={topimage}
        src={project.Image[0]}
        alt={project.Title}
        className="w-full md:h-[70vh] h-[50%] rounded-xl mt-5 object-cover"
      />
      <div className="lg:w-[75%] mx-auto">
        <h2 ref={techRef} className="text-white mt-20 text-2xl font-bold font-satoshi">
          Technology Stack
        </h2>
        <div ref={imgGridRef} className="pt-14 box px-10 flex flex-wrap justify-center gap-8">
          {project?.technologies?.map(({ tech, detail }) => (
            <div
              key={tech}
              className="tech-box flex flex-col text-white lg:w-[450px] gap-3 bg-white/5 p-5 rounded-4xl items-center"
            >
              <Label text={tech} />
              <p className="font-satoshi">{detail}</p>
            </div>
          ))}
        </div>
        <div className="pt-20">
          <InnerHeading title="KEY FEATURES" />
        </div>
        <h3 ref={descRef} className="text-2xl font-semibold font-satoshi text-primary">
          Description
        </h3>
        <div>
          <p ref={featureRef} className="text-xl text-white/60  mt-4 mx-10 font-satoshi">{project.Details}</p>
          <div ref={projectrol}  className="pt-10">
            {project?.features.map(({ heading, content }, index) => (
              <div  key={index} className="py-2 pb-10">
                <h4 className="text-xl text-primary font-satoshi font-semibold">{heading}</h4>
                <ul   className="px-10">
                  {content.map((item, key) => (
                    <li
                      key={key}
                     
                      className="py-2 text-xl mt-2 mx-4 px-4 font-satoshi text-white/60 list-disc"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full grid">
        <img
          ref={image1Ref}
          src={project.Image[1]}
          alt=""
          className="w-full h-[70%] perspective-[100px] rounded-4xl drop-shadow-[2px_2px_8px_theme(color.primary)]"
        />
        <img
          ref={image2Ref}
          src={project.Image[2]}
          alt=""
          className="w-full h-[70%] rounded-4xl drop-shadow-[2px_2px_8px_theme(color.primary)]"
        />
      </div>
    </div>
  );
}

export default ProjectInfo;