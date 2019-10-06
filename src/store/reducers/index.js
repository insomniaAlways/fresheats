import { combineReducers } from 'redux';
import ItemReducers from './itemReducers';

const allReducers = combineReducers({
  items : ItemReducers
})

export default allReducers;