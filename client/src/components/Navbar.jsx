import React from "react";
import Logo from "../assets/Logo.png";
import { TbBulb } from "react-icons/tb";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutAction } from "../store/actions/authActions";
import * as ROUTES from "../constants/routes";

const navbarItems = ["Feed", "Browse", "Profile"];

const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const renderNavItems = () => (
    <ul className="flex items-center">
      {navbarItems.map((item, idx) => {
        if (!isAuthenticated && (item === "Profile" || item === "Feed")) return null;
        return (
          <li className="mx-5 font-bold cursor-pointer hover:text-[#2D5CD0]" key={idx}>
            {item}
          </li>
        );
      })}
    </ul>
  );

  const handleAuth = (action) => {
    if (action === "Sign Up") {
      navigate(ROUTES.AUTH, { replace: true });
    } else {
      dispatch(
        signOutAction(() => {
          navigate(ROUTES.HOME, { replace: true });
        })
      );
    }
  };

  const renderActionButton = () => (
    <button
      type="button"
      className="ml-10 border-2 border-blue-700 cursor-pointer rounded-lg px-5 hover:bg-[#2D5CD0] font-medium hover:text-white"
      onClick={() => handleAuth(isAuthenticated ? "Sign Out" : "Sign Up")}
    >
      {isAuthenticated ? "Sign Out" : "Sign Up"}
    </button>
  );

  return (
    <div className="w-[85%] mx-auto my-10 flex justify-between align-center">
      <img src={Logo} alt="logo" style={{ height: "49px" }} />
      <div className="flex align-center">
        {isAuthenticated && (
          <div className="mr-10 flex align-center">
            <button type="button" className="mr-5 cursor-pointer hover:text-[#2D5CD0]">
              <TbBulb size={30} />
            </button>
            <button type="button" className="cursor-pointer hover:text-[#2D5CD0]">
              <MdOutlineNotificationsNone size={30} />
            </button>
          </div>
        )}
        {renderNavItems()}
        {renderActionButton()}
      </div>
    </div>
  );
};

export default Navbar;
