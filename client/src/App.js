import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCurrentUser } from "./store/actions/authActions";
import { useDispatch } from "react-redux";
import { useDarkModeContext } from "./context/darkModeContext";

//Pages
const Home = lazy(() => import("./pages/Home"));
const Auth = lazy(() => import("./pages/Auth"));
const Browse = lazy(() => import("./pages/Browse"));
const Feed = lazy(() => import("./pages/Feed"));
const Detail = lazy(() => import("./pages/Detail"));
const Profile = lazy(() => import("./pages/Profile"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useDarkModeContext();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <Suspense fallback={<p>LOADING...</p>}>
      <div className={isDarkMode ? "dark" : ""}>
        <div className="dark:bg-[#20232A] h-[100vh]">
          <Router>
            <ToastContainer />
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.BROWSE} element={<Browse />} />
              <Route path={ROUTES.BOOKMARKS} element={<Feed />} />
              <Route path={ROUTES.AUTH} element={<Auth />} />
              <Route path={ROUTES.PROFILE} element={<Profile />} />
              <Route path={ROUTES.DETAIL} element={<Detail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </div>
    </Suspense>
  );
};

export default App;
