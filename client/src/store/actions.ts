import { SET_LOGIN_STATUS, SET_USER_DETAILS } from "./actionTypes";
import { UserCredentials } from "../types/user.types";

export const setLoginStatus = (status: boolean) => ({
  type: SET_LOGIN_STATUS,
  payload: status,
});

export const setUserDetails = (user: UserCredentials) => ({
  type: SET_USER_DETAILS,
  payload: user,
});
