// productslice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'productsSlice/fetchProducts',
  async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      return response.data.products;
    } catch (error) {
      throw error;
    }
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const {} = productsSlice.actions; 
export default productsSlice.reducer;
