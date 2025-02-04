import React from "react";
import { TiHome } from "react-icons/ti";

function Tag() {
  return (
    <div className="border rounded-full border-white/30 bg-white/[.05] flex items-center justify-center">
      <div className="logo text-primary">
        <TiHome className="text-pretty" />
      </div>
      <p className="text-zinc-100 font-popins">Home</p>
    </div>
  );
}

export default Tag;
