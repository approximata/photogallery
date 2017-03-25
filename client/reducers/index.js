import { combineReducers } from 'redux';
import prezi from './prezi';
import searchReducer from './searchReducer';
import sortReducer from './sortReducer';

const preziApp = combineReducers({
  prezi,
  searchReducer,
  sortReducer,
});

export default preziApp;
