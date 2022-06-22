// Importing all Reducers
import reducerExample from './ReducerExample';
import discussInputReducer from './DiscussReducer';
import userSlice from './userSlice';
// Combine reducer to combine all reducers import from Redux
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  reducerExample,
  discussInputReducer,
  userSlice,
});

export default rootReducer;
