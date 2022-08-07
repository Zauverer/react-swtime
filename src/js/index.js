/* //import react into the bundle
import React, { useState } from "react"; */
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import "../styles/index.css";

const App = () => {
    const [time, setTime] = React.useState(0);
    const [timerOn, setTimerOn] = React.useState(false);
  
    React.useEffect(() => {
      let interval = null;
  
      if (timerOn) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!timerOn) {
        clearInterval(interval);
      }
  
      return () => clearInterval(interval);
    }, [timerOn]);
  
    return (
      <div className="Timers">
        
        <div id="display">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2,-1)}</span>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-1)}</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2,-1)}</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-1)}</span>
  
        </div>
  
        <div id="buttons">
          {!timerOn && time === 0 && (
            <button onClick={() => setTimerOn(true)}>Start</button>
          )}
          {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
          {!timerOn && time > 0 && (
            <button onClick={() => setTime(0)}>Reset</button>
          )}

        </div>
      </div>
    );
  };



ReactDOM.render(<App />, document.querySelector("#app"));
