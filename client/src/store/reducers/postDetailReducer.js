import {
  POST_DETAIL_FETCH,
  POST_DETAIL_SUCCESS,
  POST_DETAIL_FAILURE,
  POST_DETAIL_RESET,
} from "../../constants/postsConstants";

const initialState = {
  post: null,
  error: null,
  success: false,
};

export const postDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DETAIL_FETCH:
      return {
        ...state,
        post: action.payload,
      };
    case POST_DETAIL_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case POST_DETAIL_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case POST_DETAIL_RESET:
      return {
        ...state,
        error: null,
        success: false,
      };
    default:
      return state;
  }
};
