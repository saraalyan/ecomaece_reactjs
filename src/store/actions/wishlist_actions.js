import { ADD_TO_Wish_list,REMOVE_FROM_wish_list,CLEAR_wish_list } from "../types/actiontypes";

export const add = (product) => ({
  type: ADD_TO_Wish_list,
  payload: product,
});

export const remove = (productId) => ({
  type: REMOVE_FROM_wish_list,
  payload: productId,
});

export const clear = () => ({
  type: CLEAR_wish_list,
});
