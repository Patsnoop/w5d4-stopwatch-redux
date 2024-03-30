import React, { useState, useEffect } from "react";
import "./stopwatch.css";
import { connect } from 'react-redux';
import { startTimer, pauseTimer, resetTimer } from './actions/stopwatchactions';
import store from './store/configurestore';
const stopwatchComponent = ({ isRunning, elapsedTime, startTimer, pauseTimer, resetTimer }) => {
    return (
      <div>
        <p>Elapsed Time: {elapsedTime}</p>
        <button onClick={isRunning ? pauseTimer : startTimer}>{isRunning ? 'Pause' : 'Start'}</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    );
  };
  
const mapStateToProps = (state) => ({
    isRunning: state.stopwatch.isRunning,
    elapsedTime: state.stopwatch.elapsedTime
  });
const mapDispatchToProps = (dispatch) => {
    return {
      onStartTimer: () => dispatch(startTimer()),
      onPauseTimer: () => dispatch(pauseTimer()),
      onResetTimer: () => dispatch(resetTimer())
    };
};
const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(prevTime => prevTime + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);
  useEffect(() => {
    return () => clearInterval(intervalId);
  }, []);
  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };
  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };
  const formatTimeUnit = (unit) => {
    return unit.toString().padStart(2, "0");
  };
  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;
  return (
    <div className="stopwatch-container">
      <p className="stopwatch-time">
        {formatTimeUnit(hours)}:{formatTimeUnit(minutes)}:
        {formatTimeUnit(seconds)}:{formatTimeUnit(milliseconds)}
      </p>
      <div className="stopwatch-buttons">
        <button className="stopwatch-button" onClick={toggleRunning}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button className="stopwatch-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
  
};
const StopwatchComponent = ({ startTimer, pauseTimer, resetTimer }) => {
    return (
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    );
}

export default Stopwatch;