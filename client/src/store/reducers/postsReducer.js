import { POSTS_ERROR, LATEST_POSTS_DATA, CLEAR_POST_ERROR } from "../../constants/postsConstants";

const initialState = {
  allPosts: [],
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
    case CLEAR_POST_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
