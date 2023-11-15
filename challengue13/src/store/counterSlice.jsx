import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    incrementByValue: (state, action) => {
      state.counter += action.payload;
    }
  }
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;

export default counterSlice.reducer;
