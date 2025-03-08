import { Transaction } from "../types/transactions.types";
import { UserCredentials } from "../types/user.types";
import {
  FETCH_USER_TRANSACTIONS,
  SET_LOGIN_STATUS,
  SET_USER_DETAILS,
  UPDATE_TRANSACTION_BY_ID,
  UPDATE_TRANSACTIONS,
} from "./actionTypes";

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

export const updateTransactions = (transactions: Transaction[]) => ({
  type: UPDATE_TRANSACTIONS,
  payload: transactions,
});

export const updateTransactionById = (transaction: Transaction[]) => ({
  type: UPDATE_TRANSACTION_BY_ID,
  payload: transaction,
});
