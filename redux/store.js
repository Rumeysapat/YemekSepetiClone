import restaurantReducer from './reducers/restaurant-reducer';
import basketReducer from './reducers/basket-reducer';

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  restaurants: restaurantReducer,
  basket: basketReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
