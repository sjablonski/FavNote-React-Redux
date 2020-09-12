import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import items from 'reducers/items';
import { loadState, saveState } from 'store/sessionStorage';

const persistedState = loadState();

const store = createStore(items, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
