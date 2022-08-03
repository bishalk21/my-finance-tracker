import {
  configureStore
} from "@reduxjs/toolkit";
import transactionReducer from "./pages/transaction/transSlice.js";
import userReducer from "./pages/userState/userSlice.js";

const store = configureStore({
  reducer: {
    transactions: transactionReducer,
    user: userReducer,
  },
});

export default store;