import React from "react";
import Stats from "../common/Stats";
function ExpServ() {
  return (
    <div className="full relative bg-[url(/images/exp-service.avif)] bg-cover bg-center bg-no-repeat min-h-screen">
      <div className="absolute h-full w-full bg-radial from-primary/70 to-primary/10"></div>
      <div className="flex mx-auto w-fit mt-6">
        <Stats num={"15+"} sub={"Years of Experience"} />
        <Stats className={"relative -left-4"} num={"200+"} sub={"Successful Projects"} />
        <Stats className={"relative -left-8"} num={"150+"} sub={"Happy Client"} />
        <Stats className={"relative -left-12"} num={"160+"} sub={"5 Star Reviews"} />
      </div>
    </div>
  );
}

export default ExpServ;
