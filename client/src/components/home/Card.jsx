import React from "react";

function Card({ icon, title, content, className }) {
  return (
    <div
      className={`${className} shadow-[0px_0px_10px_0px_#00000010] rounded p-6 `}
    >
      <img src={icon} alt={title} className="w-16 h-16" />
      <h2 className="text-xl font-bold mt-4">{title}</h2>
      <p className="mt-2 text-zinc-800">{content}</p>
    </div>
  );
}

export default Card;
