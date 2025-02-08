import React from "react";
import { TiStar } from "react-icons/ti";
function Review() {
  const reviews = [{
    Ratings: 2,
    feedback: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
    username: "David Reynolds",
    profile: "https://framerusercontent.com/images/K6cUNifhQFa6qEX3kqNwfqMkiY.jpg?scale-down-to=512",
    companyname: "Tech Innovations Ltd.",
    logo:""
  },
  {
    Ratings: 5,
    feedback: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
    username: "David Reynolds",
    profile: "https://framerusercontent.com/images/K6cUNifhQFa6qEX3kqNwfqMkiY.jpg?scale-down-to=512",
    companyname: "Tech Innovations Ltd.",
    logo:"https://framerusercontent.com/images/gk7QZqkTE0Z8JusfQWLflnjHLdU.svg"
  },
  {
    Ratings: 3,
    feedback: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
    username: "David Reynolds",
    profile: "https://framerusercontent.com/images/K6cUNifhQFa6qEX3kqNwfqMkiY.jpg?scale-down-to=512",
    companyname: "Tech Innovations Ltd.",
    logo:"https://framerusercontent.com/images/gk7QZqkTE0Z8JusfQWLflnjHLdU.svg"
  },
  {
    Ratings: 5,
    feedback: "Working with Bright Horizon Marketing has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Bright Horizon Marketing truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
    username: "David Reynolds",
    profile: "	https://framerusercontent.com/images/LsJGvkbYbF1y4ifkFrjeNfRfzYM.jpg?scale-down-to=1024",
    companyname: "Tech Innovations Ltd.",
    logo:"https://framerusercontent.com/images/ODBXEmKEOwlEN62SmqJ6KAeyM.svg"
  }
  ]
  return (
    <div className=" grid grid-cols-12 gap-x-4 space-y-3    ">
      {
        reviews.map((item, key) => {
          return (
            <div key={key} className=" backdrop-blur-xs group hover:border hover:bg-white/1 hover:border-white transition duration-300 md:col-span-6 col-span-12 h-fit border border-zinc-500 rounded-2xl p-4 bg-black/10 shadow-md">
              <div className="">
                <div className="flex justify-between ">
                  <div className="flex">

                  {Array.from({ length: item.Ratings }).map((_, i) => (
                    <TiStar key={i} color="orange" className="text-blue-500" />
                  ))}
                  </div>
                  <div className="">
                    <img src={item.logo} alt="" className="group-hover:scale-110 transition-transform duration-200"  />
                  </div>

                </div>
                <div className="py-0">
                  <p className="font-popins p-2 text-white/60 ">
                    {item.feedback}
                  </p>
                  <div className="border-t flex gap-4 border-zinc-500 pt-4">
                    <img src={item.profile} className="w-[50px] h-[50px] rounded-2xl " alt="" />
                    <div className="flex  flex-col text-white gap-1">
                      <h1>{item.username}</h1>
                      <p className="uppercase text-xs text-zinc-700">{item.companyname}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })


      }


    </div>
  );
}

export default Review;
