import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/CartSlice";
import productData from './ProductFetch/fetchSlice'

export default configureStore({
   reducer: {
    cart: cartReducer,
    Productnames: productData
  },
})
