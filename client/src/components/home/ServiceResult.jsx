import { HiBadgeCheck } from "react-icons/hi";
import { BiUpArrowAlt } from "react-icons/bi";
import React from "react";
const ServiceResult = () => {
  const Details = [
    {
      icon: "/home/Service/glass.png",
      title: "Customized IT Solutions",
      content: `We specialize in understanding your unique business needs,
              offering tailored IT solutions that seamlessly integrate
              technology and strategy to drive growth, while ensuring
              scalability, security, and efficiency at every step of the
              journey.`,
    },
    {
      icon: "/home/Service/it.png",
      title: "IT Training and Skill Development",
      content: `From ideation to execution, our training programs equip 
      individuals and teams with industry-relevant skills, ensuring they 
      stay ahead in the tech-driven world. We focus on hands-on learning 
      and real-world applications to foster innovation and practical expertise.`,
    },
    {
      icon: "/home/Service/smile.png",
      title: "Personalized Support and Guidance",
      content: `With a focus on innovation, precision, and timeliness, we aim to be 
      your trusted partner in achieving your IT and training goals. Our commitment to 
      excellence drives us to deliver tailored solutions that empower your success in a 
      rapidly evolving digital landscape. `,
    },
  ];
  return (
    <div className=" pt-[8rem] flex lg:flex-row flex-col  gap-20 justify-start mx-auto w-[73%] ">
      <div className="relative bg-[url('/home/Service/Result.png')] bg-cover rounded-2xl w-full">
        <div className="absolute -left-[7%] top-[8%] shadow  bg-white px-7 py-6 rounded-2xl">
          <p className="text-center font-semibold">January 2025 </p>
          <div className="flex items-center gap-2">
            <div class="size-2.5 bg-blue-500 rounded-full"></div>
            <p>$72,000</p>
            <BiUpArrowAlt className="text-green-500 h-8 w-6" />
          </div>
          <div className="flex items-center gap-2">
            <div class="size-2.5 bg-red-500 rounded-full"></div>
            <p>$10,000</p>
          </div>
        </div>
        <div className="absolute shadow  bg-white px-7 py-6 -right-[7%] rounded-2xl bottom-[8%] ">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">10x Sales Growth</p>
            <HiBadgeCheck className="size-6 text-[#5456ED]" />
          </div>
          <div className="flex justify-between pt-4">
            <p className="font-semibold text-xl">$ 8457154</p>
            <div className="flex text-sm items-center align-sub">
              <p className="text-green-500 font-semibold">15.15%</p>
              <BiUpArrowAlt className="text-gray-500 h-4 w-4" />
            </div>
          </div>
          <p className="text-gray-500 pt-2">Compared to ($15000 last year)</p>
        </div>
      </div>
      <div className="">
        <h2 className="text-4xl">Where Creativity Meets</h2>
        <h3 className="text-4xl pt-3 gradient-text">High Conversion</h3>
        {Details &&
          Details.map(({ icon, title, content }) => (
            <div className="pt-10 flex gap-[20px]">
              <img src={icon} alt="" className="size-[32px]" />
              <div className=" ">
                <h4 className="text-xl font-bold">{title}</h4>
                <p className="text-lg ">{content}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServiceResult;
