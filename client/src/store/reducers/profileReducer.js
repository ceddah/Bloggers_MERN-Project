import {
  PROFILE_FETCH_SUCCESS,
  PROFILE_FETCH_FAILURE,
  PROFILE_FETCH_RESET,
  PROFILE_PASSWORD_RESET_SUCCESS,
  PROFILE_PASSWORD_RESET_FAILURE,
  PROFILE_UPDATE_SOCIALS_SUCCESS,
  PROFILE_UPDATE_SOCIALS_FAILURE,
} from "../../constants/profileActions";

const initialState = {
  user: null,
  comments: [],
  posts: [],
  success: false,
  error: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_FETCH_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case PROFILE_FETCH_FAILURE:
    case PROFILE_PASSWORD_RESET_FAILURE:
    case PROFILE_UPDATE_SOCIALS_FAILURE:
      return {
        ...state,
        success: false,
        error: action.payload,
      };
    case PROFILE_FETCH_RESET:
      return {
        ...state,
        success: false,
        error: null,
      };
    case PROFILE_PASSWORD_RESET_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case PROFILE_UPDATE_SOCIALS_SUCCESS:
      return {
        ...state,
        success: true,
      };
    default:
      return state;
  }
};
