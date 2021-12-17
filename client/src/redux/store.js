import { createStore } from 'redux';
import combineReducers from './reducers';
import { applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

const store = createStore(combineReducers, applyMiddleware(reduxThunk));

export default store;