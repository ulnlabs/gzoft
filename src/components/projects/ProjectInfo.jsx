import { AiOutlineDoubleLeft } from "react-icons/ai"; 
import React from 'react';
import { useLocation, useParams, Link } from 'react-router-dom';

function ProjectInfo() {
  const location = useLocation(); 
  const project = location.state?.project;
  return (
    <div className=" relative min-h-screen container mx-auto py-[5rem] text-white">
      <h1 className="text-3xl font-bold">
       {project.Title}
      </h1>
      <img src={project.Image} alt={project.Title} className="w-full h-80 rounded-xl mt-5 object-cover" />
      <p className="text-lg mt-4">{project.Description}</p>
      <div className="absolute bottom-3 right-0 flex items-center">
        <AiOutlineDoubleLeft />

      <Link to="/project" className="text-blue-500 underline "> Go Back</Link>
      </div>
    </div>
  );
}

export default ProjectInfo;
