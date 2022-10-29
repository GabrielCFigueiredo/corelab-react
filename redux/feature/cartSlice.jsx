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
      if (item > 0) {
        state.cartItems[item].qtd += 1;
      } else {
        const product = { ...action.payload, qtd: 1 };
        state.cartItems.push(product);
      }
    },
    removeFavorite: (state, action) => {
      const index = state.cartItems.findIndex((item) => item.id === action.payload);
      state.cartItems.splice(index, 1);
    },
  },
});

export const { addFavorite, removeFavorite } = cartSlice.actions;

export const getAllFavorites = (state) => state.favorites.favorites;

export default cartSlice.reducer;
