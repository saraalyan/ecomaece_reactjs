
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../types/actiontypes';

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existingProductIndex = state.findIndex(product => product.id === action.payload.id);
      if (existingProductIndex !== -1) {
        state[existingProductIndex].quantity++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      return [...state];

    case REMOVE_FROM_CART:
      return state.filter(product => product.id !== action.payload.id);

    case CLEAR_CART:
      return [];

    default:
      return state;
  }
};

export default cartReducer;
