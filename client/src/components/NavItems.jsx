import React from "react";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";

const NavItems = ({ userId, isAuthenticated }) => {
  return [
    { name: "Browse Blogs", path: ROUTES.BROWSE },
    { name: "Bookmarks", path: ROUTES.BOOKMARKS },
    { name: "Profile", path: `/profile/${userId}` },
  ].map((item, idx) => {
    if (!isAuthenticated && (item.name === "Profile" || item.name === "Bookmarks")) return null;
    return (
      <Link to={item.path} key={idx}>
        <li className="md:mx-5 mb-5 md:mb-0 md:text-lg text-2xl font-bold cursor-pointer dark:hover:text-[#ebebed] hover:text-[#2D5CD0]">
          {item.name}
        </li>
      </Link>
    );
  });
};

export default NavItems;
