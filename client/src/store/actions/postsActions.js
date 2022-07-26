import * as api from "../../api";
import { POSTS_ERROR, LATEST_POSTS_DATA, ALL_POSTS_DATA } from "../../constants/postsConstants";

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
