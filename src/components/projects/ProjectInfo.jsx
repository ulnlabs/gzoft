import { AiOutlineDoubleLeft } from "react-icons/ai";
import { useLocation, useParams, Link } from 'react-router-dom';
import Label from "/src/components/about/Label";
import { InnerHeading } from "../about/Heading";



function ProjectInfo() {

  const location = useLocation();
  const project = location.state?.project;
  return (
    <div className=" relative min-h-screen container mx-auto py-[5rem]">
      <h1 className="text-3xl text-white font-bold">
        {project.Title}
      </h1>
      <img src={project.Image[0]} alt={project.Title} className="w-full md:h-[70vh] h-[50%] rounded-xl mt-5 object-cover" />
      <div className="lg:w-[75%] mx-auto ">
        <h2 className="text-white mt-20 text-2xl font-bold font-satoshi">Technology Stack</h2>
        <div className="pt-14 px-10 flex flex-wrap justify-center  gap-8">
          {
            project?.technologies?.map(({ tech, detail }) => {
              return (
                <div className="flex flex-col text-white lg:w-[450px] gap-3 bg-white/5 p-5 rounded-4xl items-center">
                  <Label text={tech} />
                  <p className="font-satoshi">{detail} </p>
                </div>
              )
            })
          }
        </div>
        <div>
        </div>
        <div className="pt-20">
          <InnerHeading title={"KEY FEATURES"} />
        </div>
        <h3 className="text-2xl font-semibold font-satoshi  text-white" >Description</h3>
        <div>
          <p className="text-xl mt-4 mx-10 font-satoshi">{project.Details}</p>
          <div className="pt-10">
            {
              project?.features.map(({ heading, content }) => (
                <div className="py-2 pb-10">
                  <h4 className="text-xl text-white font-satoshi font-semibold">{heading}</h4>
                  <div>
                    <ul className="px-10 ">
                      {content.map((item,key) => (
                        <li key={key} className="py-2 text-xl mt-2 mx-4 px-4 font-satoshi list-disc ">{item} </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="absolute bottom-3 right-0 gap-1  flex items-center">
          <AiOutlineDoubleLeft className="text-primary text-2xl" />
          <Link to="/work" className="text-primary underline text-2xl  "> Go Back</Link>
        </div>
      </div>
      <div className="w-full mt-36 grid gap-10">
        <img src={project.Image[1]} alt="" className="w-full perspective-[1000px] rounded-4xl drop-shadow-[2px_2px_8px_theme(color.primary)]  " />
        <img src={project.Image[2]} alt="" className="w-full rounded-4xl  drop-shadow-[2px_2px_8px_theme(color.primary)] " />
      </div>
    </div>
  );
}

export default ProjectInfo;
