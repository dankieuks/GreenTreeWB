import React from "react";

import Sidebar from "./Dashboard/SideBar.jsx";
import { Outlet } from "react-router-dom";
function Admin() {
  return (
    <section className="grid grid-cols-6 gap-4">
      <Sidebar className=" col-span-1" />
      <div className=" col-span-5 ">
        <Outlet />
      </div>
    </section>
  );
}

export default Admin;
