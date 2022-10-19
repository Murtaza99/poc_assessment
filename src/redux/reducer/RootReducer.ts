import {combineReducers} from 'redux';
import {Products} from './Products';

export const rootReducer = combineReducers({
  product: Products,
});
