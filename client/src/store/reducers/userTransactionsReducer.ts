import { FETCH_USER_TRANSACTIONS, UPDATE_TRANSACTIONS } from "../actionTypes";

const initialState = {
  transactions: [],
  loading: false,
  error: null,
};

const userTransactionsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_USER_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
        loading: false,
        error: null,
      };
    case UPDATE_TRANSACTIONS:
      return {
        ...state,
        transactions: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default userTransactionsReducer;
