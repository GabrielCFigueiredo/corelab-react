import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      const item = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      if (!item) {
        const product = { ...action.payload, qtd: 1 };
        state.cartItems.push(product);
        
      }
    },
  },
});

export const { addFavorite } = cartSlice.actions;

export const getAllFavorites = (state) => state.favorites.favorites;

export default cartSlice.reducer;
