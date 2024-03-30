import { START_TIMER, PAUSE_TIMER, RESET_TIMER } from '../actions/actiontypes';

const initialState = {
  isRunning: false,
  elapsedTime: 0
};

const stopwatchReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        isRunning: true
      };
    case PAUSE_TIMER:
      return {
        ...state,
        isRunning: false
      };
    case RESET_TIMER:
      return {
        ...state,
        isRunning: false,
        elapsedTime: 0
      };
    default:
      return state;
  }
};

export default stopwatchReducer;