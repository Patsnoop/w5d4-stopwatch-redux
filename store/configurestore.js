import { createStore, combineReducers } from 'redux';
import stopwatchReducer from '../reducers/stopwatchreducer';

const rootReducer = combineReducers({
  stopwatch: stopwatchReducer
  // Add more reducers if needed
});

const store = createStore(rootReducer);

export default store;