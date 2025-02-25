import React from "react";

const awards = [
  "Best Trainer Award – NIIT",
  "Best Consultant Award – JoyThrob",
  "Best Radio Jockey – Sun Networks",
  "Best NSS Student – Madurai Kamaraj University",
  "Inter-college Volleyball Player",
];

const Brands = () => {
  return (
    <div className="flex flex-wrap pt-5 md: justify-start gap-5">
      {awards.map((item, index) => (
        <div
          key={index}
          className="p-4 bg-white/10 text-white/70 rounded-3xl flex  items-center justify-center "
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Brands;
