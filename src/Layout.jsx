import React from "react";
import { Outlet } from "react-router-dom";
import Navbar2 from "./components/Navbar/Navbar2";


function Layout() {
  return (
    <div className=" md:ml-[20%] h-screen md:mr-[11%]  bg-[#fdfffc]">
      <Navbar2 />
      <Outlet />
    </div>
  );
}

export default Layout;
