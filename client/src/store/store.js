import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { authReducer, postsReducer, postDetailReducer, profileReducer } from "./reducers/";

const reducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  postDetail: postDetailReducer,
  profile: profileReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
