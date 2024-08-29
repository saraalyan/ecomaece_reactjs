import { combineReducers } from 'redux';
import darkReducer from './reducers/dark';
import languageReducer from './reducers/lang_reducer';
import wishlistReducer from './reducers/whishlist_reducer'; 

const rootReducer = combineReducers({
    // cart: cartReducer,
    lang: languageReducer,
    darkMode: darkReducer,

    // wishlist: wishlistReducer, 
});

export default rootReducer;
