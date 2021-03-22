import { combineReducers } from 'redux';

// REDUCERS
import postReducer from './postReducer/postReducer';

const rootReducer = combineReducers({
  postRXS: postReducer,
});

export default (state, action) => rootReducer(state, action);
