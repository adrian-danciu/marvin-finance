import { SET_USER_DETAILS } from "../actionTypes";

const initialState = {
  userDetails: {},
  loading: false,
  error: null,
};

const userDetailsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
        looading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default userDetailsReducer;
