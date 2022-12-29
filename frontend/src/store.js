import {configureStore} from "@reduxjs/toolkit";
import transReducer from "./pages/transaction/transactionSlice";

const store = configureStore({
    reducer: {
        // Add your reducers here
        transactions: transReducer,
    }
})

export default store;