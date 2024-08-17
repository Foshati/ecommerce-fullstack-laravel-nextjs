"use client"

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

export const cartSilce = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            console.log(state, action);
        }
    }
})

export const { addToCart } = cartSilce.actions;
export const cartReducer = cartSilce.reducer;