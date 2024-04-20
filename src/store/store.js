

import { createSlice, configureStore } from '@reduxjs/toolkit'
import productslice from './productslice';
import cartslice from './cartslice';



 const my_store = configureStore({
  reducer:{
    products:productslice,
    cart:cartslice,
  }
})
export default my_store;

