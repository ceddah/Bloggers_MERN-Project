import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = (Component) => () => {
  return (
    <div className="layout">
      <Navbar />
      <Component />
      <Footer />
    </div>
  );
};

export default Layout;
