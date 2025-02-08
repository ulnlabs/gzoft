import React from "react";
import ReviewDetail from "../components/common/Review";
import Footer from "../components/common/Footer"


function Review() {
  return (
    <div className=" py-[4rem] container mx-auto">
      <div className="flex justify-center text-center text-5xl mt-14   ">
        <h1 className=" text-white">
          Check Our Works With{" "}
          <span className="block ">Real Results</span>
        </h1>
      </div>
      <div className="py-[2rem] ">

      <ReviewDetail />
      <Footer/>
      </div>
     
     
    </div>
  );
}

export default Review;
