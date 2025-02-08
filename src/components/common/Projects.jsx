import { AiOutlineDoubleRight } from "react-icons/ai"; 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from "./Carosal";

function Projects({data}) {
  
  
  const navigate = useNavigate();
  return (
    <div>
      <div className="h-fit flex flex-col gap-y-4 py-5">
        {
          data.map((item, index) => {
            return (
              <div key={index} className="grid grid-cols-12 gap-3 backdrop-blur-xs relative">
                <div className=" md:col-span-5 rounded-4xl flex items-center col-span-12 overflow-hidden h-[350px]">
                <Carousel images={item.Image} />
                </div>
                <div className="hover:border hover:border-white/40 transition duration-500 md:col-span-7 bg-white/8 border h-[350px] col-span-12 rounded-4xl p-6">
                  <div>
                    <h1 className='text-xl font-bold text-white'>{item.Title}</h1>
                    <h2 className='text-sm pt-2 font-light text-white/70'>{item.Description}</h2>
                  </div>
                  <div className="absolute bottom-0 hover:translate-x-1 transition-transform duration-500 right-8 p-4">
                    <button 
                      className='text-primary text-[15px] cursor-pointer'
                      onClick={() => navigate(`/project/${item.Title}-info`, { state: { project: item } })}
                    >
                      More Info 
                    </button>
                    <AiOutlineDoubleRight className="inline text-primary" />
                  </div>
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Projects;
