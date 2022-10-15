import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const item = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (item >= 0) {
        state.cartItems[item].cartQuantity += 1;
      } else {
        const product = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(product);
      }
    },
  },
});

export const { addFavorite } = cartSlice.actions;

export const getAllFavorites = (state) => state.favorites.favorites;

export default cartSlice.reducer;
