import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import NavItems from "./NavItems";
import AuthButton from "./AuthButton";

const MobileNavbar = ({ setToggleMobileNav, isAuthenticated, userId, handleAuth }) => {
  return (
    <div className="md:hidden z-50 w-[100vw] h-screen bg-gray-100 absolute top-0 right-0">
      <button className="text-2xl absolute top-5 right-5" onClick={() => setToggleMobileNav(false)}>
        <AiOutlineClose />
      </button>
      <ul className="flex flex-col items-center justify-center h-full">
        <NavItems isAuthenticated={isAuthenticated} userId={userId} />
        <AuthButton isAuthenticated={isAuthenticated} handleAuth={handleAuth} />
      </ul>
    </div>
  );
};

export default MobileNavbar;
