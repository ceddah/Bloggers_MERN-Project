import React from "react";
import Logo from "../assets/Logo.png";
import { TbBulb } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutAction } from "../store/actions/authActions";
import * as ROUTES from "../constants/routes";
import { Link } from "react-router-dom";
import { useDarkModeContext } from "../context/darkModeContext";

const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { toggleDarkMode } = useDarkModeContext();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      className="ml-10 border-2 bg-white dark:text-[#20232A] border-blue-700 transition-all cursor-pointer rounded-lg px-5 dark:hover:bg-[#ebebed] hover:bg-[#2D5CD0] font-medium hover:text-white"
      onClick={() => handleAuth(isAuthenticated ? "Sign Out" : "Sign Up")}
    >
      {isAuthenticated ? "Sign Out" : "Sign Up"}
    </button>
  );

  return (
    <div className="w-[85%] mx-auto py-10 dark:bg-[#33373E] px-5 dark:text-[#F7F7F7] flex justify-between align-center">
      <Link to={ROUTES.HOME}>
        <img src={Logo} alt="logo" style={{ height: "49px" }} />
      </Link>
      <div className="flex align-center">
        <div className="mr-10 flex align-center">
          <button
            type="button"
            className="mr-5 cursor-pointer hover:text-[#2D5CD0] dark:hover:text-[#ebebed]"
            onClick={toggleDarkMode}
          >
            <TbBulb size={30} />
          </button>
        </div>

        <ul className="flex items-center">
          {[
            { name: "Browse", path: ROUTES.BROWSE },
            { name: "Bookmarks", path: ROUTES.BOOKMARKS },
            { name: "Profile", path: `/profile/${user?._id}` },
          ].map((item, idx) => {
            if (!isAuthenticated && (item.name === "Profile" || item.name === "Bookmarks"))
              return null;
            return (
              <li
                className="mx-5 font-bold cursor-pointer dark:hover:text-[#ebebed] hover:text-[#2D5CD0]"
                key={idx}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
        {renderActionButton()}
      </div>
    </div>
  );
};

export default Navbar;
