import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "Count",
  initialState: 0,
  reducers: {
    INC: (state) => state + 1,
    DEC: (state) => state - 1,
  },
});

export const { INC, DEC } = CounterSlice.actions;
export default CounterSlice.reducer;
