import React from "react";
import Review from "../common/Review";
function Testimonials() {
  return (
    <div className="min-h-screen w-full overflow-hidden relative flex flex-col items-center justify-start ">
      <div className="container min-h-full mx-auto  flex flex-col items-center justify-start gap-y-4 py-[4rem]">
        <div className="absolute w-6xl top-0 mx-auto h-12 rounded-b-full blur-3xl bg-primary"></div>
        <div className="h-full flex flex-col items-center justify-start">
            <h1 className="text-8xl tracking-widest absolute top-0  text-center text-white/20 uppercase max-md:text-2xl">
                Testimonials
            </h1>
          {[].map((item, index) => (
            <Review />
          ))}
        </div>
        <div className="absolute w-6xl bottom-0 mx-auto h-12 rounded-t-full blur-3xl bg-primary"></div>
      </div>
    </div>
  );
}

export default Testimonials;
