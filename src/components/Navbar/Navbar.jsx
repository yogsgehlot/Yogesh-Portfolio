import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed md:h-screen pt-5  md:p-10 md:right-0 items-center flex  justify-center">
      <div className="bg-[#000000] text-[12px]  rounded-full p-3 w-full space-x-3 flex flex-wrap justify-center h-full items-center  gap-y-2 font-bold text-[#fdfffc] md:hidden">
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

      <div className="bg-[#000000]  rounded-full p-7 md:space-y-10 text-[#fdfffc] hidden md:block ">
        <div className="cursor-pointer ">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-[#d00000]" : undefined}  `
            }
            to={"/"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-house hover:stroke-[#d00000]"
            >
              <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
              <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            </svg>
          </NavLink>
        </div>
        <div className="cursor-pointer">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-[#d00000]" : undefined} `
            }
            to={"/yogesh/about"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user hover:stroke-[#d00000]"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </NavLink>
        </div>
        <div className="cursor-pointer">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-[#d00000]" : undefined} `
            }
            to={"/yogesh/resume"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-briefcase-business hover:stroke-[#d00000]"
            >
              <path d="M12 12h.01" />
              <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              <path d="M22 13a18.15 18.15 0 0 1-20 0" />
              <rect width="20" height="14" x="2" y="6" rx="2" />
            </svg>
          </NavLink>
        </div>
        <div className="cursor-pointer">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-[#d00000]" : undefined}  `
            }
            to={"/yogesh/projects"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-folder-open-dot hover:stroke-[#d00000]"
            >
              <path d="m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2" />
              <circle cx="14" cy="15" r="1" />
            </svg>
          </NavLink>
        </div>
        <div className="cursor-pointer">
          <NavLink
            className={({ isActive }) =>
              `${isActive ? "text-[#d00000]" : undefined} `
            }
            to={"/yogesh/contact"}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-send hover:stroke-[#d00000]"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
