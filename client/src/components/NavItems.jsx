import React from "react";
import * as ROUTES from "../constants/routes";
import { NavLink } from "react-router-dom";

const NavItems = ({ userId, isAuthenticated }) => {
  const styles =
    "md:mx-5 mb-5 md:mb-0 md:text-base font-bold transition-all cursor-pointer hover:text-gray-400";
  return [
    { name: "Home", path: ROUTES.HOME },
    { name: "Browse Blogs", path: ROUTES.BROWSE },
    { name: "Bookmarks", path: ROUTES.BOOKMARKS },
    { name: "Profile", path: `/profile/${userId}` },
  ].map((item, idx) => {
    if (!isAuthenticated && (item.name === "Profile" || item.name === "Bookmarks")) return null;
    return (
      // <NavLink to={item.path} key={idx} >
      //   <li className={styles}>
      //     {item.name}
      //   </li>
      // </NavLink>
      <NavLink
        to={item.path}
        key={idx}
        className={({ isActive }) => `${styles} ${isActive ? "text-gray-400" : ""}`}
        // className={(isActive) => {
        //   console.log(isActive, item.name);
        // }}
      >
        {item.name}
      </NavLink>
    );
  });
};

export default NavItems;
