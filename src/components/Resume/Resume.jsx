import React from "react";

import Education from "./Education";
import Skillset from "./Skillset";
import Tools from "./Tools";
function Resume() {
  return (
    <div
      className="  md:pt-10 pt-24 pr-10 pl-10 
      bg-[#fdfffc] h-screen"
    >
      <div className="flex justify-center ">
        <p className="md:text-6xl text-4xl font-bold bg-[#d00000] px-4 py-1  text-[#fdfffc]">
          Resume
        </p>
      </div>

      <div className="flex max-md:justify-center max-md:items-center mt-5">
        <p className="md:text-4xl text-xl bg-[#000000] font-bold px-4 py-1 text-[#fdfffc] ">
          Education
        </p>
      </div>

      <Education />

      <hr className="my-8   " />

      <div className="flex max-md:justify-center max-md:items-center mt-5">
        <p className="md:text-4xl text-xl bg-[#000000] font-bold px-4 py-1 text-[#fdfffc] ">
          Skill Set
        </p>
      </div>
      <Skillset />

      <hr className="my-8   " />
      <div className="flex">
        <p className="md:text-4xl text-xl bg-[#000000] font-bold px-4 py-1 text-[#fdfffc] ">
          Tools I Use
        </p>
      </div>
      <Tools />
    </div>
  );
}

export default Resume;
