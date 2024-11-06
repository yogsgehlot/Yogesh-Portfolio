import React from "react";
import {
  SiFigma,
  SiPostman,
  SiVercel,
  SiVisualstudiocode,
  SiWindows,
} from "react-icons/si";

function Tools() {
  return (
    <div className="flex flex-wrap justify-center items-center pb-24 md:m-5 max-md:mt-5 gap-5">
      <div>
        <SiWindows className="text-5xl md:text-7xl lg:text-9xl  w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      </div>
      <div>
        <SiVisualstudiocode className="text-5xl md:text-7xl lg:text-9xl  w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      </div>
      <div>
        <SiPostman className="text-5xl md:text-7xl lg:text-9xl  w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      </div>
      <div>
        <SiFigma className="text-5xl md:text-7xl lg:text-9xl  w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      </div>
      <div>
        <SiVercel className="text-5xl md:text-7xl lg:text-9xl  w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      </div>
    </div>
  );
}

export default Tools;
