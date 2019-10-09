import { combineReducers } from 'redux';
import ItemReducers from './itemReducers';
import AuthValidationReducer from './authenticationReducers';

const allReducers = combineReducers({
  items : ItemReducers,
  authValidation: AuthValidationReducer
})

export default allReducers;