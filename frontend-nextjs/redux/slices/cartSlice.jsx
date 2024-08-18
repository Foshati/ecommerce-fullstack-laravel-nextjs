'use client';

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSilce = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {product, qty} = action.payload;
      state.cart = [...state.cart, {...product, qty: qty}];

      console.log(state.cart);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((p) => p.id !== action.payload);
    },
  },
});

export const {addToCart, removeFromCart} = cartSilce.actions;
export const cartReducer = cartSilce.reducer;
