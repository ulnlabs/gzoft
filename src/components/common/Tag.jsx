import React from "react";
import { TiHome } from "react-icons/ti";

function Tag({ icons = null, text = "Text", varient = 1 }) {
  return (
    <div className="rounded-full border-white/30 bg-white/[.05]">
      <div
        className={`flex items-center justify-center px-2 py-1 gap-2 text-xs bg-white/10 rounded-2xl ${
          varient === 1
            ? "text-primary"
            : varient === 2
            ? "text-white"
            : "text-black"
        }`}
      >
        {icons && <div className="">{icons}</div>}
        <p className=" font-popins uppercase">{text}</p>
      </div>
    </div>
  );
}

export default Tag;
