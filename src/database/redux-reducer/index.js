import { combineReducers } from 'redux';

import persist from './persist';
import sholat from './sholat';
import todo from './todo';

export default combineReducers({
  persist,
  sholat,
  todo,
});
