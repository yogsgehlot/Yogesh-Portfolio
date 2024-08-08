import React from "react";
import { data } from "./ProjectData";
import ProjectsCard from "./ProjectsCard";
function Projects() {
  
  return (
    <div
      className="  md:pt-10 pt-24 pr-10 pl-10 
      bg-[#fdfffc] h-screen space-y-8"
    >
      <div className="flex justify-center ">
        <p className="md:text-6xl text-4xl font-bold bg-[#d00000] px-4 py-1  text-[#fdfffc]">
          Projects
        </p>
      </div>

      <div className="flex justify-center items-center mt-5">
        <p className=" md:text-xl text-[15px] bg-[#000000]  px-4 py-1 text-[#fdfffc] ">
          Here are few projects I've worked on recently
        </p>
      </div>
      <div className="grid grid-cols-12 m-5 gap-8">
        {data &&
          data.map((project) => (
            <ProjectsCard
              id={project.id}
              title={project.title}
              description={project.description}
              img={project.img}
              github={project.github}
              demo={project.demo}
            />
          ))}
      </div>

      <hr className="my-8   " />
    </div>
  );
}

export default Projects;
