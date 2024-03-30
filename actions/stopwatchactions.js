import { START_TIMER, PAUSE_TIMER, RESET_TIMER } from './actiontypes';

export const startTimer = () => ({
  type: START_TIMER
});

export const pauseTimer = () => ({
  type: PAUSE_TIMER
});

export const resetTimer = () => ({
  type: RESET_TIMER
});