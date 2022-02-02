import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers';
import thunk from 'redux-thunk';

const logDispatch = (store) => (next) => (action) => {
  console.log(action.type);
  console.log(store.getState());
  return next(action);
};

const store = createStore(reducer, applyMiddleware(thunk, logDispatch));

export default store;