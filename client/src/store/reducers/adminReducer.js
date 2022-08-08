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

const initialState = {
  users: {
    allUsers: [],
    totalItems: 0,
  },
  posts: {
    allPosts: [],
    totalItems: 0,
  },
  reports: {
    allReports: [],
    totalItems: 0,
  },
  success: false,
  error: null,
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: {
          allUsers: action.payload.users,
          totalItems: action.payload.totalUsers,
        },
      };
    case ADMIN_FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: {
          allPosts: action.payload.posts,
          totalItems: action.payload.totalPosts,
        },
      };
    case ADMIN_BANUNBAN_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case ADMIN_PROMOTE_USER_SUCCESS:
      return {
        ...state,
        success: true,
      };
    case ADMIN_FETCH_USERS_FAILURE:
    case ADMIN_FETCH_POSTS_FAILURE:
    case ADMIN_BANUNBAN_FAILURE:
    case ADMIN_PROMOTE_USER_FAILURE:
      return {
        ...state,
        success: false,
        error: action.payload,
      };
    case ADMIN_STATE_RESET:
      return {
        ...state,
        error: null,
        success: false,
      };
    default:
      return state;
  }
};
