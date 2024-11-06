import React from "react";
import { BiMailSend } from "react-icons/bi";
import {
  BsGithub,
  BsInstagram,
  BsMailbox,
  BsTwitterX,
  BsX,
} from "react-icons/bs";
import { CgInstagram, CgMail, CgPresentation } from "react-icons/cg";
import { CiInstagram } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaDemocrat } from "react-icons/fa6";
import { GiDemolish, GiPresent } from "react-icons/gi";
import { GrInstagram } from "react-icons/gr";
import { LiaLinkedinIn } from "react-icons/lia";

function Contact() {
  return (
    <div
      className="  md:pt-10 pt-16 pb-24 pr-10 pl-10 
      bg-[#fdfffc] h-screen space-y-8 text-justify"
    >
      <div className="flex justify-center ">
        <p className="md:text-6xl text-4xl font-bold bg-[#d00000] px-4 py-1  text-[#fdfffc]">
          Contact
        </p>
      </div>

      <div className="flex justify-center items-center mt-5">
        <p className=" md:text-xl text-[15px] bg-[#000000]  px-4 py-1 text-[#fdfffc] ">
          Feel free to contact me
        </p>
      </div>
      <div className="flex justify-center items-center mt-5">
        <p className=" md:text-xl text-[15px] px-4 py-1 text-[#000000] ">
          Whether you have a project in mind, need assistance with development,
          or just want to say hello, I'm here to help. Feel free to reach out
          through any of the channels below, and I'll get back to you as soon as
          possible.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-5 pb-24">
        <a
          href="https://www.instagram.com/yogsgehlot"
          target="_blank"
          className="text-5xl border-black border p-5 rounded-lg text-[#00000] hover:text-[#d00000] hover:scale-125 transition-all hover:bg-[#000000] cursor-pointer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://x.com/yogsgehlot"
          target="_blank"
          className="text-5xl border-black border p-5 rounded-lg text-[#00000] hover:text-[#d00000] hover:scale-125 transition-all hover:bg-[#000000] cursor-pointer"
        >
          <BsTwitterX />
        </a>
        <a
          href="https://www.linkedin.com/in/yogsgehlot"
          target="_blank"
          className="text-5xl border-black border p-5 rounded-lg text-[#00000] hover:text-[#d00000] hover:scale-125 transition-all hover:bg-[#000000] cursor-pointer"
        >
          <LiaLinkedinIn />
        </a>
        <a
          href="https://www.github.com/yogsgehlot"
          target="_blank"
          className="text-5xl border-black border p-5 rounded-lg text-[#00000] hover:text-[#d00000] hover:scale-125 transition-all hover:bg-[#000000] cursor-pointer"
        >
          <BsGithub />
        </a>
        <a
          target="_blank"
          href="mailto:theyogsgehlot@gmail.com"
          className="text-5xl border-black border p-5 rounded-lg text-[#00000] hover:text-[#d00000] hover:scale-125 transition-all hover:bg-[#000000] cursor-pointer"
        >
          <CgMail />
        </a>
      </div>
    </div>
  );
}

export default Contact;
