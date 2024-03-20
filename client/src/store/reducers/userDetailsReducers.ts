import { SET_USER_DETAILS } from "../actionTypes";

const initialState = {
  userDetails: {},
};

const userDetailsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};

export default userDetailsReducer;
