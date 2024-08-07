import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiGit,
  DiJava,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact,
} from "react-icons/di";
import {
  SiExpress,
  SiTypescript,
} from "react-icons/si";

function Skillset() {
  return (
    <div className="grid  grid-cols-10 md:m-5 max-md:mt-5 gap-5">
      <CgCPlusPlus className="text-4xl w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      <DiJavascript1 className="text-4xl w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black " />
      <DiNodejs className="text-4xl w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      <DiReact className="text-4xl w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      <DiMongodb className="text-4xl w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      <SiExpress className="text-4xl w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      <DiGit className="text-4xl w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      <DiPython className="text-4xl w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      <DiJava className="text-4xl w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      <SiTypescript className="text-4xl w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
    </div>
  );
}

export default Skillset;
