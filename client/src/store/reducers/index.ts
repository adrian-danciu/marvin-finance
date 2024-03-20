import { combineReducers } from "redux";
import loginStatusReducer from "./loginStatusReducer";
import userDetailsReducer from "./userDetailsReducers";

const rootReducer = combineReducers({
  loginStatus: loginStatusReducer,
  userDetails: userDetailsReducer,
});

export default rootReducer;
