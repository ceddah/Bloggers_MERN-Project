import {
  POSTS_ERROR,
  LATEST_POSTS_DATA,
  CLEAR_POST_ERROR,
  ALL_POSTS_DATA,
} from "../../constants/postsConstants";

const initialState = {
  allPosts: {
    posts: [],
    totalItems: 0,
  },
  latestPosts: [],
  postDetail: null,
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
    case CLEAR_POST_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
