import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer, createReducerManager } from './Reducer';

const initialState = {};

const configureStore = initialState => {
  const middleware = [thunk];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const reducerManager = createReducerManager(rootReducer);
  const store = createStore(reducerManager.reduce, initialState, composeEnhancers(applyMiddleware(...middleware)));
  store.reducerManager = reducerManager;

  return store;
};

const store = configureStore(initialState);

const addRedcuer = app => {
  const reducer = { app };
  for (var key in reducer) {
    store.reducerManager.add(key, reducer[key]);
  }
};

const removeReducer = app => {
  const reducer = { app };
  for (var key in reducer) {
    store.reducerManager.remove(key);
  }
};

export { store, addRedcuer, removeReducer };
