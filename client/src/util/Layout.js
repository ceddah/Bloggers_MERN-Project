import React from "react";
import Navbar from "../components/Navbar";

const Layout = (Component) => () => {
  return (
    <div className="layout">
      <Navbar />
      <Component />
    </div>
  );
};

export default Layout;
