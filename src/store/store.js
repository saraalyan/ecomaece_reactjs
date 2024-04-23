
// store.js
import { createStore } from 'redux';
import rootReducer from './rootreducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const my_store = createStore(rootReducer,composeWithDevTools( ));

export default my_store;
