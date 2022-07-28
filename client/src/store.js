import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "./pages/transaction/transSlice.js";

const store = configureStore({
  reducer: {
    transactions: transactionReducer,
  },
});

export default store;
