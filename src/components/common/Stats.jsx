import React from "react";

function Stats({ num, sub, className, id }) {
  return (
    <div
      id={id}
      className={`w-[180px] h-[180px] rounded-full bg-white/10 flex items-center justify-center flex-col ${className}`}
    >
      <h1 className="text-4xl text-white">{num}</h1>
      <p className="text-white text-xs font-light">{sub}</p>
    </div>
  );
}

export default Stats;
