import React from "react";
import Tag from "../common/Tag";
import Brandings from "../common/Brandings";

function Branding() {
  return (
    <div className="container max-md:px-4 mx-auto flex flex-col items-center justify-center gap-2.5 py-[6rem]">
      <Tag text="Best Tech Partner" />
      <h1 className="text-4xl text-center text-white my-4">
        Brands that trust us
      </h1>
      <Brandings />
    </div>
  );
}

export default Branding;
