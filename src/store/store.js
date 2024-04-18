import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import languageReducer from './reducer';

const my_store = createStore(languageReducer, composeWithDevTools());

export default my_store;
