import { combineReducers } from 'redux';

// REDUCERS
import postReducer from './postReducer/postReducer';

// ACTIONS

const rootReducer = combineReducers({
  successRXS: postReducer,
});

export default (state, action) => rootReducer(state, action);
