import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const MobileNavbar = ({ setToggleMobileNav }) => {
  return (
    <div className="md:hidden z-50 w-[100vw] h-screen bg-red-400 absolute top-0 right-0">
      <button className="text-2xl absolute top-5 right-5" onClick={() => setToggleMobileNav(false)}>
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default MobileNavbar;
