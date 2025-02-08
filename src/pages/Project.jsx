import React from "react";
import Projects from "../components/common/Projects";
function Project() {
  return (
    <div className="min-h-screen p-8">
      <div className=" pt-[8rem] text-5xl text-center ">
        <h1 className="text-white">
          Check Our Works With
          <span className=" block">Real Results</span>
        </h1>
      </div>
      <Projects />
    </div>
  );
}

export default Project;
