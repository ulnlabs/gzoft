import React from "react";

function Stats({ num, sub }) {
  return (
    <div className="w-[150px] h-[150px] rounded-full bg-white/10 flex items-center justify-center flex-col">
      <h1 className="text-4xl text-white">{num}</h1>
      <p className="text-white text-xs font-light">{sub}</p> 
    </div>
  );
}

export default Stats;
