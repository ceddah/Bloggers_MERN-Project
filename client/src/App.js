import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getCurrentUser } from "./store/actions/authActions";
import { useDispatch } from "react-redux";
import { useDarkModeContext, useModalContext } from "./context";
import Modal from "./components/Modal";

//Pages
const Home = lazy(() => import("./pages/Home"));
const Auth = lazy(() => import("./pages/Auth"));
const Browse = lazy(() => import("./pages/Browse"));
const Bookmarks = lazy(() => import("./pages/Bookmarks"));
const Detail = lazy(() => import("./pages/Detail"));
const Profile = lazy(() => import("./pages/Profile"));
const NotFound = lazy(() => import("./pages/NotFound"));

// protected routes
// button for triggering create new blog on mobile

const App = () => {
  const { isModalOpen, setIsModalOpen } = useModalContext();
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
        <div className="dark:bg-[#20232A] min-h-screen relative">
          <Router>
            <ToastContainer />
            <Routes>
              <Route path={ROUTES.HOME} element={<Home />} />
              <Route path={ROUTES.BROWSE} element={<Browse />} />
              <Route path={ROUTES.BOOKMARKS} element={<Bookmarks />} />
              <Route path={ROUTES.AUTH} element={<Auth />} />
              <Route path={ROUTES.PROFILE} element={<Profile />} />
              <Route path={ROUTES.DETAIL} element={<Detail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          {isModalOpen && <Modal handleClose={() => setIsModalOpen(false)} />}
        </div>
      </div>
    </Suspense>
  );
};

export default App;
