import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
};
const transSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransactions: (state, { action }) => {
      state.transactions = action;
    },
  },
});

const { reducers, actions } = transSlice;
export const { setTransactions } = actions;
export default reducers;
