import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchSlice = createAsyncThunk(
  "Products/Fetch",
  
  async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    return data.products;
  }
);

const fetchProducts = createSlice({
  name: "ProductName",
  initialState: {
    products: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(FetchSlice.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchSlice.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(FetchSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default fetchProducts.reducer;
