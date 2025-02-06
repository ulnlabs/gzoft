import React from "react";
import Footer from "../components/common/Footer";
import ReviewDetail from "../components/common/ReviewDetail";

function Home() {
  return (
    <div className="flex items-end justify-center w-full min-h-screen bg-[#1d1d1d] flex-col ">
      <ReviewDetail />
    </div>
  );
}

export default Home;
