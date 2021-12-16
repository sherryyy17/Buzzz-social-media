import { createStore } from 'redux';
import combineReducers from './reducers';
import { applymiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

const store = createStore(combineReducers, applymiddleware(reduxThunk));

export default store;