import {
  SET_LOGIN_STATUS,
  SET_USER_DETAILS,
  FETCH_USER_TRANSACTIONS,
} from "./actionTypes";
import { UserCredentials } from "../types/user.types";
import { Transaction } from "../types/transactions.types";

export const setLoginStatus = (status: boolean) => ({
  type: SET_LOGIN_STATUS,
  payload: status,
});

export const setUserDetails = (user: UserCredentials) => ({
  type: SET_USER_DETAILS,
  payload: user,
});

export const setUserTransactions = (transactions: Transaction[]) => ({
  type: FETCH_USER_TRANSACTIONS,
  payload: transactions,
});
