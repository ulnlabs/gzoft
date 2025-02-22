import { FaNodeJs } from "react-icons/fa"; 
import { IoLogoCss3 } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { DiJqueryLogo } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { FaPhp } from "react-icons/fa";
import { RiAngularjsLine } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { FaAngellist } from "react-icons/fa";
import React from 'react'

const Label = ({ text }) => {
  return (
    <div className={`bg-white/10 w-fit  ${iconMap[text] != null ? "border-primary" : ""}  p-2 border rounded-full  flex items-center`} >
      {iconMap[text] || <FaAngellist className="text-primary text-xl " />}
      <p className='text-white px-2 font-satoshi '>{text}</p>
    </div>
  )
}


const iconMap = {
  MonogoDB: <SiMongodb className=" text-xl" />,
  NodeJS: <FaNodeJs className="text-xl"/> ,
  AngularJs: <RiAngularjsLine className=" text-xl" />,
  PHP: <FaPhp className=" text-xl" />,
  MySQL: <GrMysql className=" text-xl" />,
  JavaScript: <IoLogoJavascript className=" text-xl" />,
  JQuery: <DiJqueryLogo className=" text-xl" />,
  HTML: <AiFillHtml5 className=" text-xl" />,
  CSS: <IoLogoCss3 className=" text-xl" />
}

export default Label
