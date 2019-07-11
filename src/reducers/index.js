import { combineReducers } from 'redux'
import feed from './feedReducer'

const compareApp = combineReducers({
  feed
});

export default compareApp