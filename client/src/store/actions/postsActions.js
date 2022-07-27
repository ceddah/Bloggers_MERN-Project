import * as api from "../../api";
import {
  POSTS_ERROR,
  LATEST_POSTS_DATA,
  ALL_POSTS_DATA,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAILURE,
  CLEAR_POST_RESET,
} from "../../constants/postsConstants";

export const fetchLatestPosts = () => async (dispatch) => {
  try {
    const response = await api.getLatestPosts();
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: LATEST_POSTS_DATA,
        payload: data.posts,
      });
    } else {
      dispatch({
        type: POSTS_ERROR,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: POSTS_ERROR,
      payload: "Service Error, please try again.",
    });
  }
};

export const fetchPosts = (search, category, page) => async (dispatch) => {
  try {
    const response = await api.getAllPosts(search, category, page);
    const data = await response.json();
    if (data.success) {
      dispatch({
        type: ALL_POSTS_DATA,
        payload: data,
      });
    } else {
      dispatch({
        type: POSTS_ERROR,
        payload: data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: POSTS_ERROR,
      payload: "Service Error, please try again.",
    });
  }
};

export const createPost = (postData, successCallback) => async (dispatch) => {
  try {
    // const response = await api.postNewPost(postData);
    // const data = await response.json();
    // if (data.success) {
    //   dispatch({
    //     type: POST_CREATE_SUCCESS,
    //     payload: data,
    //   });
    //   successCallback();
    // } else {
    //   dispatch({
    //     type: POST_CREATE_FAILURE,
    //     payload: data.message,
    //   });
    // }
    console.log(postData);
  } catch (error) {
    dispatch({
      type: POST_CREATE_FAILURE,
      payload: "Service Error, please try again.",
    });
  }
};

export const clearPostStatus = () => async (dispatch) => {
  dispatch({ type: CLEAR_POST_RESET });
};
