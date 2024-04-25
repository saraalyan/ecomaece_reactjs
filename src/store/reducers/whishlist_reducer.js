import { ADD_TO_Wish_list ,REMOVE_FROM_wish_list,CLEAR_wish_list} from "../types/actiontypes";

const initialState = [];

const wishlist_reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_Wish_list:
     
        state.push({ ...action.payload});
      
      return [...state];

    case REMOVE_FROM_wish_list:
      return state.filter(product => product.id !== action.payload.id);

    case CLEAR_wish_list:
      return [];

    default:
      return state;
  }
};

export default wishlist_reducer;
