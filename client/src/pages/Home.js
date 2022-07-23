import React from "react";
import Layout from "../util/Layout";
import MetaData from "../components/MetaData";

const Home = () => {
  return (
    <>
      <MetaData title="Home" />
      <div>Home</div>
    </>
  );
};

export default Layout(Home);
