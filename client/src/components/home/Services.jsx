import React from "react";
import ServiceCard from "./ServiceCard";
import ServiceResult from "./ServiceResult";

function Services() {
  return (
    <div className="bg-linear-to-b pt-[8rem] w-full from-white to-[var(--bgr1)]">
      <ServiceCard />
      <ServiceResult />
    </div>
  );
}

export default Services;
