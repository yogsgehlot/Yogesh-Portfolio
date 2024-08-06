import React from "react";

function Resume() {
  return (
    <div
      className="  md:pt-10 pt-24 pr-10 pl-10 
      bg-[#fdfffc]  h-screen"
    >
      <div className="flex justify-center ">
        <p className="md:text-6xl text-4xl font-bold bg-[#d00000] px-4 py-1  text-[#fdfffc]">
          RESUME
        </p>
      </div>
      <div className="my-8 flex flex-col gap-y-8">
        <div className="flex">
          <p className="md:text-4xl text-xl bg-[#000000] px-4 py-1 text-[#fdfffc] ">
            EDUCATION
          </p>
        </div>
        <div className="flex justify-center items-center gap-7">
          <div className="flex flex-col">
            <div className="flex">
              <p className="bg-[#d00000] px-4 py-1 text-[#fdfffc] ">
                2020-2024
              </p>
            </div>
            <p className="text-2xl font-bold">Chandigarh University</p>
            <p className="text-xl">
              Bachelor of Engineering in Computer Science
            </p>
            <p className="text-xl">CGPA: 8.23</p>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <p className="bg-[#d00000] px-4 py-1 text-[#fdfffc] ">
                2020-2024
              </p>
            </div>
            <p className="text-2xl font-bold">Chandigarh University</p>
            <p>Bachelor of Engineering sp. BIG DATA ANALYTICS</p>
            <p>CGPA: 8.23</p>
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <p className="bg-[#d00000] px-4 py-1 text-[#fdfffc] ">
                2020-2024
              </p>
            </div>
            <p className="text-2xl font-bold">Chandigarh University</p>
            <p>Bachelor of Engineering sp. BIG DATA ANALYTICS</p>
            <p>CGPA: 8.23</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Resume;
