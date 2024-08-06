import React from "react";
import Navbar from "./Navbar";
function About() {
  return (
    <div
      className="flex flex-col justify-start items-center md:pt-10 pt-24 pr-10 pl-10 
     bg-[#fdfffc]  h-screen"
    >
      <div className="bg-[#d00000] md:px-4 py-1 flex justify-center ">
        <p className="md:text-6xl text-4xl font-bold text-[#fdfffc]">ABOUT ME</p>
      </div>
      <div className="my-8">
        <p className="md:text-4xl text-xl text-justify text-[#000000]">
          I'm <b> Yogesh Gehlot</b>, Full-Stack Web Developer/Freelancer
        </p>
      </div>
      <div className="my-5">
        <p className="text-2xl">
          At the intersection of creativity and technology, I bring your ideas
          to life with a blend of frontend finesse and backend power. With a
          strong foundation in both aspects of web development, I specialize in
          crafting seamless digital experiences that not only look great but
          function flawlessly.
        </p>
      </div>

      <div className=" flex justify-center gap-x-5 pb-10 ">
        <div className=" w-1/2 flex justify-center items-center flex-col gap-y-5 bg-[#000000] text-[#fdfffc] p-5 ">
          <p className="text-4xl font-bold text-[#fdfffc] px-4 py-1">
            My Mission
          </p>
          <p className="text-xl">
            To provide high-quality, reliable, and innovative web solutions that
            meet the unique needs of each client. I believe in the power of
            collaboration and am committed to delivering projects that exceed
            expectations.
          </p>
        </div>
        <div className=" w-1/2 flex justify-center items-center flex-col gap-y-5 p-5 ">
          <div className="text-4xl font-bold bg-[#d00000] text-[#fdfffc] px-4 py-1">
            What I Do..?
          </div>
          <div>
            <div className="flex justify-center items-center gap-x-5">
              <img src="/frontend.png" alt="" />
              <div className="flex flex-col justify-center items-start ">
                <p className="text-2xl font-bold">Frontend Development</p>
                <p className="text-[15px]">
                  Creating responsive, dynamic, and user-friendly interfaces
                  using the latest technologies.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-x-5">
              <img src="/backend.png" alt="" />
              <div className="flex flex-col justify-center items-start ">
                <p className="text-2xl font-bold">Backend Development</p>
                <p className="text-[15px]">
                  Building secure, scalable, and efficient server-side logic
                  with databases that meet your project's needs.
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-x-5">
              <img src="/freelance.png" alt="" />
              <div className="flex flex-col justify-center items-start ">
                <p className="text-2xl font-bold">Freelance Services</p>
                <p className="text-[15px]">
                  Offering flexible, client-focused solutions to help you bring
                  your projects to life on your terms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
