// rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import languageReducer from './reducers/lang_reducer';
import wishlistReducer from './reducers/whishlist_reducer'; 

const rootReducer = combineReducers({
    cart: cartReducer,
    lang: languageReducer,
    wishlist: wishlistReducer, 
});

export default rootReducer;
