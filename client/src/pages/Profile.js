import React, { useEffect } from "react";
import Layout from "../util/Layout";
import { useParams } from "react-router-dom";
import { fetchUserProfileDetails } from "../store/actions/profileActions";
import { useSelector, useDispatch } from "react-redux";

const Profile = () => {
  const { userId } = useParams();
  const { user, posts, comments, success, error } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  console.log({ user, posts, comments });
  useEffect(() => {
    dispatch(fetchUserProfileDetails(userId));
  }, [dispatch, userId]);
  return <div>Profile</div>;
};

export default Layout(Profile, "Profile");
