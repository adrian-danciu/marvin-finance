import { SET_LOGIN_STATUS } from "../actionTypes";

const initialState = {
  isLoggedIn: false,
};

const loginStatusReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_LOGIN_STATUS:
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    default:
      return state;
  }
};

export default loginStatusReducer;
