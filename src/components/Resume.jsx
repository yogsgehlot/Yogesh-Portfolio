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
  SiFigma,
  SiPostman,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
  SiWindows,
  SiWindows10,
  SiWindows11,
} from "react-icons/si";

function Resume() {
  return (
    <div
      className="  md:pt-10 pt-24 pr-10 pl-10 
      bg-[#fdfffc] h-screen"
    >
      <div className="flex justify-center ">
        <p className="md:text-6xl text-4xl font-bold bg-[#d00000] px-4 py-1  text-[#fdfffc]">
          RESUME
        </p>
      </div>

      <div className="flex max-md:justify-center max-md:items-center mt-5">
        <p className="md:text-4xl text-xl bg-[#000000] font-bold px-4 py-1 text-[#fdfffc] ">
          EDUCATION
        </p>
      </div>
      <div className="my-8 flex w-full max-md:flex-col max-md:justify-center max-md:items-center gap-10">
        <div className="flex flex-col gap-y-1">
          <div className="flex">
            <p className="bg-[#4a5759] px-4 py-1 text-[#fdfffc] ">2020-2024</p>
          </div>
          <p className="text-2xl font-bold">Chandigarh University</p>
          <p className="text-xl">BE in Computer Science</p>
          <p className="text-xl">CGPA: 8.23</p>
          <p className="text-xl flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin "
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>{" "}
            Punjab
          </p>
        </div>

        <div className="flex flex-col gap-y-1">
          <div className="flex">
            <p className="bg-[#4a5759] px-4 py-1 text-[#fdfffc] ">2017-2018</p>
          </div>
          <p className="text-2xl font-bold">Intermediat</p>
          <p className="text-xl">Board of Sc. Edu. Rajasthan</p>
          <p className="text-xl">Percentage: 85%</p>
          <p className="text-xl flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin "
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>{" "}
            Rajasthan
          </p>
        </div>

        <div className="flex flex-col gap-y-1">
          <div className="flex">
            <p className="bg-[#4a5759] px-4 py-1 text-[#fdfffc] ">2015-2016</p>
          </div>
          <p className="text-2xl font-bold">Matriculation</p>
          <p className="text-xl">Board of Sc. Edu. Rajasthan</p>
          <p className="text-xl">Percentage: 86%</p>
          <p className="text-xl flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-map-pin "
            >
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>{" "}
            Rajasthan
          </p>
        </div>
      </div>

      <hr className="my-8   " />

      <div className="flex max-md:justify-center max-md:items-center mt-5">
        <p className="md:text-4xl text-xl bg-[#000000] font-bold px-4 py-1 text-[#fdfffc] ">
          SKILLSET
        </p>
      </div>

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
      <hr className="my-8   " />
      <div className="flex">
        <p className="md:text-4xl text-xl bg-[#000000] font-bold px-4 py-1 text-[#fdfffc] ">
          TOOLS I USE
        </p>
      </div>

      <div className="grid grid-cols-10 md:m-5 max-md:mt-5 gap-5">
        <SiWindows className="text-4xl w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />

        <SiVisualstudiocode className="text-4xl w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />

        <SiPostman className="text-4xl w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />

        <SiFigma className="text-4xl w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />

        <SiVercel className="text-4xl w-full h-full p-5 text-[#d00000] hover:scale-110  col-span-2 max-sm:col-span-5 max-md:col-span-3  border-black rounded-md border-[2px] shadow-xl hover:shadow-2xl hover:bg-black" />
      </div>
    </div>
  );
}

export default Resume;
