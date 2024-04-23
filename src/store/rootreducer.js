// rootReducer.js
import { combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import languageReducer from './reducers/lang_reducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    lang: languageReducer, 
});

export default rootReducer;
