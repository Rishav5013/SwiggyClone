import PayReducer from './payReducer';
import restaurant from './restaurant';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  PayReducer: PayReducer,
  restaurant: restaurant,
});

export default rootReducer;
