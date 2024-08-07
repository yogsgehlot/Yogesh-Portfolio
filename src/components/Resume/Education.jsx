import React from 'react'

function Education() {
  return (
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
  );
}

export default Education