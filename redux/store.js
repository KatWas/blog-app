import { createStore, combineReducers } from 'redux';
import initialState from './initialState';

const subreducers = {
}

const reducer = combineReducers(state.posts);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;