import React from "react";
import { AiOutlineLogout, AiOutlineLogin } from "react-icons/ai";

const AuthButton = ({ isAuthenticated, handleAuth }) => {
  return (
    <button
      type="button"
      className="md:ml-10 border-2 bg-white dark:text-[#20232A] border-blue-700 transition-all md:text-sm text-xl cursor-pointer rounded-lg px-5 md:px-5 py-1 md:py-3 md:py-0 dark:hover:bg-[#ebebed] hover:bg-[#2D5CD0] font-medium hover:text-white"
      onClick={() => handleAuth(isAuthenticated ? "Sign Out" : "Sign Up")}
    >
      <span className="xl:block md:hidden block">{isAuthenticated ? "Sign Out" : "Sign In"}</span>
      <span className="md:block xl:hidden hidden text-lg">
        {isAuthenticated ? <AiOutlineLogout /> : <AiOutlineLogin />}
      </span>
    </button>
  );
};

export default AuthButton;
