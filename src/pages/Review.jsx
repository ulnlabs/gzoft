import React from "react";
import Review from "../components/common/Review";



function ReviewPage() {
  return (
    <div className=" py-[6rem]  container mx-auto">
      <div className="flex justify-center text-center text-5xl mt-14   ">
        <h1 className=" text-white">
          Check Our Works With{" "}
          <span className="block ">Real Results</span>
        </h1>
      </div>
      <div className="py-[2rem] ">
        <Review/>

     
     
      </div>
     
     
    </div>
  );
}

export default ReviewPage;
