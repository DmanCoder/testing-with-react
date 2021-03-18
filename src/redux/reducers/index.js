import { combineReducers } from 'redux';

// REDUCERS
import successReducer from './successReducer/successReducer';

// ACTIONS

const rootReducer = combineReducers({
  successRXS: successReducer,
});

export default (state, action) => rootReducer(state, action);
