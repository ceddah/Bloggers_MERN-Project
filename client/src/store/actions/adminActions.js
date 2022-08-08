import * as api from "../../api";
import {
  ADMIN_FETCH_USERS_SUCCESS,
  ADMIN_FETCH_USERS_FAILURE,
  ADMIN_FETCH_POSTS_SUCCESS,
  ADMIN_FETCH_POSTS_FAILURE,
  ADMIN_BANUNBAN_SUCCESS,
  ADMIN_BANUNBAN_FAILURE,
  ADMIN_PROMOTE_USER_SUCCESS,
  ADMIN_PROMOTE_USER_FAILURE,
  ADMIN_STATE_RESET,
} from "../../constants/adminConstats";

const fetchAllUsers = (currentPage, search) => async (dispatch) => {
  try {
    const response = await api.getAllUsers(currentPage, search);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: ADMIN_FETCH_USERS_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: ADMIN_FETCH_USERS_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: ADMIN_FETCH_USERS_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

const fetchAllBlogs = (currentPage, search) => async (dispatch) => {
  try {
    const response = await api.getAllBlogs(currentPage, search);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: ADMIN_FETCH_POSTS_SUCCESS,
        payload: data,
      });
    } else {
      dispatch({
        type: ADMIN_FETCH_POSTS_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: ADMIN_FETCH_POSTS_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

const banUnbanUser = (userId) => async (dispatch) => {
  try {
    const response = await api.getBanUnbanUser(userId);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: ADMIN_BANUNBAN_SUCCESS,
      });
    } else {
      dispatch({
        type: ADMIN_BANUNBAN_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: ADMIN_BANUNBAN_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

const promoteUser = (userId) => async (dispatch) => {
  try {
    const response = await api.getPromoteUser(userId);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: ADMIN_PROMOTE_USER_SUCCESS,
      });
    } else {
      dispatch({
        type: ADMIN_PROMOTE_USER_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: ADMIN_PROMOTE_USER_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

const clearAdminState = () => async (dispatch) => {
  dispatch({ type: ADMIN_STATE_RESET });
};

export { fetchAllUsers, fetchAllBlogs, clearAdminState, banUnbanUser, promoteUser };
