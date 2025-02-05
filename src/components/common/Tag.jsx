import React from "react";
import { TiHome } from "react-icons/ti";

function Tag({ icons = <TiHome />, text = "Text" }) {
  return (
    <div className="border rounded-full border-white/30 bg-white/[.05]">
      <div className="flex items-center justify-center px-2 py-1 gap-2">
        <div className="text-primary">{icons}</div>
        <p className="text-zinc-100 font-popins uppercase">{text}</p>
      </div>
    </div>
  );
}

export default Tag;
