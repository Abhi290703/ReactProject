import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/CartSlice";
import productReducer from "./ProductFetch/fetchSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    ProductName: productReducer
  }
});