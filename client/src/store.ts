import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "./features/expensesSlice";

const store = configureStore({
  reducer: {
    expenses: expenseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
