import { createStore } from 'redux';
import pranState from './reducer';
let store = createStore(pranState);

export default store;