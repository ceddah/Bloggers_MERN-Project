import React from "react";
import { Link } from "react-router-dom";

const SocialIcon = ({ href, icon }) => {
  return (
    <Link to={href}>
      <div className="p-3 mx-3 text-[#2D5CD0] text-2xl bg-gray-300 hover:bg-gray-400 transition-all rounded-full">
        {icon}
      </div>
    </Link>
  );
};

export default SocialIcon;
