import { combineReducers } from 'redux';
import tasks from './Task/reducer';
const rootReducer = combineReducers({
  tasks
});
export default rootReducer;
