import React from "react";
import { CgCPlusPlus, CgShapeCircle, CgShapeHexagon } from "react-icons/cg";
import {
  DiDotnet,
  DiGit,
  DiJava,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact,
} from "react-icons/di";
import { SiCsharp, SiDotnet, SiExpress, SiTypescript } from "react-icons/si";

function Skillset() {
  return (
    <div className="flex flex-wrap justify-center items-center md:m-5 max-md:mt-5 gap-5 ">
      <div>
        <SiCsharp className="text-5xl md:text-7xl lg:text-9xl  w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      </div>
      <div>
        <CgCPlusPlus className="text-5xl md:text-7xl lg:text-9xl  w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      </div>
      <div>
        <DiJavascript1 className="text-5xl md:text-7xl lg:text-9xl  w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black " />
      </div>
      <div>
        <DiNodejs className="text-5xl md:text-7xl lg:text-9xl  w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      </div>
      <div>
        <DiReact className="text-5xl md:text-7xl lg:text-9xl  w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      </div>
      <div>
        <DiMongodb className="text-5xl md:text-7xl lg:text-9xl  w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      </div>
      <div>
        <SiExpress className="text-5xl md:text-7xl lg:text-9xl  w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      </div>
      <div>
        <SiDotnet className="text-5xl md:text-7xl lg:text-9xl  w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      </div>
      <div>
        <DiGit className="text-5xl md:text-7xl lg:text-9xl  w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      </div>
      <div>
        <DiPython className="text-5xl md:text-7xl lg:text-9xl  w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      </div>
      <div>
        <DiJava className="text-5xl md:text-7xl lg:text-9xl  w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      </div>
      <div>
        <SiTypescript className="text-5xl md:text-7xl lg:text-9xl  w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      </div>
    </div>
  );
}

export default Skillset;
