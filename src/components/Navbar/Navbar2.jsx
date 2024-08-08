import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar2() {
  return (
    <div className="fixed md:flex md:flex-col   h-screen bg-[#000000] w-[20vw]  left-0 hidden ">
      <div>
        <img src="/profile2.png" className=" " alt="" />
      </div>
      <div className="flex flex-col justify-center h-full items-center md:space-y-7 lg:space-y-10 font-bold text-[#fdfffc] ">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `hover:text-[#d00000] ${isActive ? "text-[#d00000]" : undefined}`
          }
        >
          HOME
        </NavLink>
        <NavLink
          to={"/yogesh/about"}
          className={({ isActive }) =>
            `hover:text-[#d00000] ${isActive ? "text-[#d00000]" : undefined} `
          }
        >
          ABOUT
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#d00000] ${isActive ? "text-[#d00000]" : undefined} `
          }
          to={"/yogesh/resume"}
        >
          RESUME
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#d00000] ${isActive ? "text-[#d00000]" : undefined} `
          }
          to={"/yogesh/projects"}
        >
          PROJECTS
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `hover:text-[#d00000] ${isActive ? "text-[#d00000]" : undefined} `
          }
          to={"/yogesh/contact"}
        >
          CONTACT
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar2;
