import { createSlice } from "@reduxjs/toolkit";

// localStorage helpers (keep if you already added them)
const loadCartFromStorage = () => {
  const data = localStorage.getItem("cartItems");
  return data ? JSON.parse(data) : [];
};

const saveCartToStorage = (items) => {
  localStorage.setItem("cartItems", JSON.stringify(items));
};

const CartSlice = createSlice({
  name: "cart",

  initialState: {
    items: loadCartFromStorage(),
  },

  reducers: {
    // ADD TO CART
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      }

      saveCartToStorage(state.items);
    },

    // INCREASE QTY
    increaseQty: (state, action) => {
      const item = state.items.find(
        (i) => i.id === action.payload
      );
      if (item) {
        item.qty += 1;
        saveCartToStorage(state.items);
      }
    },

    // DECREASE QTY
    decreaseQty: (state, action) => {
      const item = state.items.find(
        (i) => i.id === action.payload
      );
      if (item && item.qty > 1) {
        item.qty -= 1;
        saveCartToStorage(state.items);
      }
    },

    // REMOVE FROM CART
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
      saveCartToStorage(state.items);
    },

    // CLEAR CART
    clearCart: (state) => {
      state.items = [];
      saveCartToStorage([]);
    },
  },
});

export const {
  addToCart,increaseQty,decreaseQty,removeFromCart,clearCart,
} = CartSlice.actions;

export default CartSlice.reducer;
