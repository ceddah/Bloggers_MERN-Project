import {
  POSTS_ERROR,
  LATEST_POSTS_DATA,
  CLEAR_POST_RESET,
  ALL_POSTS_DATA,
  POST_CREATE_SUCCESS,
  POST_CREATE_FAILURE,
} from "../../constants/postsConstants";

const initialState = {
  allPosts: {
    posts: [],
    totalItems: 0,
  },
  latestPosts: [],
  postDetail: null,
  success: false,
  error: null,
};

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LATEST_POSTS_DATA:
      return {
        ...state,
        latestPosts: action.payload,
      };
    case POSTS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case ALL_POSTS_DATA:
      return {
        ...state,
        allPosts: {
          posts: action.payload.posts,
          totalItems: action.payload.totalItems,
        },
      };
    case POST_CREATE_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case POST_CREATE_FAILURE:
      return {
        ...state,
        success: false,
      };
    case CLEAR_POST_RESET:
      return {
        ...state,
        error: null,
        success: false,
      };
    default:
      return state;
  }
};
