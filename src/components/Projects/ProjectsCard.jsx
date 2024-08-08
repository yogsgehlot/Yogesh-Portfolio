import React from "react";

function ProjectsCard({ title, description, img, github = "", demo = "" }) {
  return (
    <div className="lg:col-span-4 md:col-span-6 col-span-12 border-[2px] border-black rounded-lg flex-col justify-center items-center p-4 space-y-4 pb-5 shadow-md text-[#000000] hover:shadow-lg hover:scale-105 transition-all hover:bg-[#000000] hover:text-[#d00000] ">
      <div className="flex justify-center items-center">

      <img src={img} alt="" className="rounded-xl" />
      </div>
      <div className="flex justify-center items-center">
        <p className="text-2xl font-bold   ">{title}</p>
      </div>
      <p className="text-xl text-justify text-balance">{description}</p>
      <div className="flex justify-center items-center gap-10">
        {github != "" && (
          <a
            href={github}
            target="_blank"
            className="flex justify-center items-center gap-3 text-[#fdfffc] text-xl bg-[#00509d] px-3 py-2 rounded-md hover:bg-[#012a4a]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fdfffc"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            Github
          </a>
        )}

        {demo != "" && (
          <a
            href={demo}
            target="_blank"
            className="flex justify-center items-center gap-3 text-[#fdfffc] text-xl bg-[#ffb703] px-3 py-2 rounded-md hover:bg-[#fb8500]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fdfffc"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-presentation"
            >
              <path d="M2 3h20" />
              <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
              <path d="m7 21 5-5 5 5" />
            </svg>{" "}
            Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectsCard;
