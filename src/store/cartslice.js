import { createSlice } from '@reduxjs/toolkit';

export const cartslice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    add_to_cart: (state, action) => {
      state.push(action.payload);
    },
    delet_from_cart: (state, action) => {
    },
    clear: (state) => {
      state.products = [];
    },
  },
});

export const { add_to_cart, delet_from_cart, clear } = cartslice.actions;
export default cartslice.reducer;
