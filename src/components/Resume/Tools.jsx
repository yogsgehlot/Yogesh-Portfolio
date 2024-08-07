import React from 'react'
import { SiFigma, SiPostman, SiVercel, SiVisualstudiocode, SiWindows } from 'react-icons/si';

function Tools() {
  return (
    <div className="grid grid-cols-10 md:m-5 max-md:mt-5 gap-5">
      <SiWindows className="text-4xl w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />

      <SiVisualstudiocode className="text-4xl w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />

      <SiPostman className="text-4xl w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />

      <SiFigma className="text-4xl w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />

      <SiVercel className="text-4xl w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
    </div>
  );
}

export default Tools