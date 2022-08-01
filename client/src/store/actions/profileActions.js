import * as api from "../../api";
import {
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAILURE,
  PROFILE_FETCH_RESET,
  PROFILE_PASSWORD_RESET_SUCCESS,
  PROFILE_PASSWORD_RESET_FAILURE,
  PROFILE_UPDATE_SOCIALS_SUCCESS,
  PROFILE_UPDATE_SOCIALS_FAILURE,
} from "../../constants/profileActions";

export const fetchUserProfileDetails = (userId) => async (dispatch) => {
  try {
    const response = await api.getUserProfileDetails(userId);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: PROFILE_FETCH_SUCCESS,
        payload: data.userProfileDetails,
      });
    } else {
      dispatch({
        type: PROFILE_FETCH_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: PROFILE_FETCH_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

export const resetUserPassword = (userId, userData) => async (dispatch) => {
  try {
    const response = await api.postResetPassword(userId, userData);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: PROFILE_PASSWORD_RESET_SUCCESS,
      });
    } else {
      dispatch({
        type: PROFILE_PASSWORD_RESET_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: PROFILE_PASSWORD_RESET_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

export const setSocialLinks = (userId, userData) => async (dispatch) => {
  try {
    const response = await api.postSetSocial(userId, userData);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: PROFILE_UPDATE_SOCIALS_SUCCESS,
      });
    } else {
      dispatch({
        type: PROFILE_UPDATE_SOCIALS_FAILURE,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: PROFILE_UPDATE_SOCIALS_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

export const clearProfileStatus = () => async (dispatch) => {
  dispatch({ type: PROFILE_FETCH_RESET });
};
