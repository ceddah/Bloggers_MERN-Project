import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Admin/Sidebar";

const Admin = () => {
  return (
    <div className="flex min-h-full w-full">
      <Sidebar />
      <div className="xl:p-10 p-5 w-full h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
