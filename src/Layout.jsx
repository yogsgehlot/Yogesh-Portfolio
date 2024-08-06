import React from "react";
import { Outlet } from "react-router-dom";
import Navbar2 from "./components/Navbar2";


function Layout() {
  return (
    <div className="flex justify-center md:ml-[18%] h-screen md:mr-[10%]  bg-[#fdfffc]">
      <Navbar2 />
      <Outlet />
    </div>
  );
}

export default Layout;
