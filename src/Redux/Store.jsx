import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/CartSlice";

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
