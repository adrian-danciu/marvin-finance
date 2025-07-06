import { combineReducers } from "redux";
import loginStatusReducer from "./loginStatusReducer";
import userDetailsReducer from "./userDetailsReducers";
import transactionsReducer from "./userTransactionsReducer";

const rootReducer = combineReducers({
  loginStatus: loginStatusReducer,
  userDetails: userDetailsReducer,
  userTransactions: transactionsReducer,
});

export default rootReducer;
