import React from "react";

const Brands = () => {


  return (
    <div className="flex flex-wrap pt-5 md: justify-start gap-5">
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <div
          key={index}
          className="p-4 bg-white/10 rounded-3xl flex  items-center justify-center md:w-[100px] lg:w-[180px]"
        >
          <img
            src={`/images/brands/${item}.svg`}
            className="h-[30px]  "
            alt={`Brand No. ${item}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Brands;
