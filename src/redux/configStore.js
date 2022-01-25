import { createStore, combineReducers } from 'redux';
import referalReducer from './ducks/referal';

const reducers = combineReducers({
  referal: referalReducer,
});

const store = createStore(reducers);

export default store;
