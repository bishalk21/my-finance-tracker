import {configureStore} from "@reduxjs/toolkit";
import transReducer from "./pages/transaction/transactionSlice";
import userReducer from "./pages/users/userSlice";

const store = configureStore({
    reducer: {
        // Add your reducers here
        transactions: transReducer,
        user: userReducer,
    }
})

export default store;