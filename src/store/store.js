
import { createStore } from 'redux';
import rootReducer from './rootreducer';

const my_store = createStore(rootReducer);

export default my_store;
