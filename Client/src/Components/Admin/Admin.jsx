import React from "react";

import Sidebar from "./Dashboard/SideBar.jsx";
import { Outlet } from "react-router-dom";
function Admin() {
  return (
    <section className="grid grid-cols-5 gap-4">
      <Sidebar className="col-span-1" />
      <div className="col-span-4 p-4">
        <Outlet />
      </div>
    </section>
  );
}

export default Admin;
