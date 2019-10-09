import { createStore, compose, applyMiddleware } from 'redux';
import AllReducers from './reducers';
import thunk from 'redux-thunk';

const initialState = {
  items: ['hello']
};

const middleware = [thunk];

const store = createStore(AllReducers, initialState,
  compose(applyMiddleware(...middleware)));

export default store;