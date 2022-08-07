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








// include your styles into the webpack bundle
/* 
function SimpleCounter(props){
    return (
        <div className="bigCounter">
            <div className="calendar">
                <i className="fas fa-stopwatch"></i>
            </div>
            <div className="four">{props.digitFour%10}</div>
            <div className="three">{props.digitThree%10}</div>
            <div className="two">{props.digitTwo%10}</div>
            <div className="one">{props.digitOne%10}</div>

        </div>);


}

SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};

let counter = 0;

setInterval(
    function(){
        const four = Math.floor(counter/1000);
        const three = Math.floor(counter/100);
        const two = Math.floor(counter/10);
        const one = Math.floor(counter/1);
        console.log(four,three,two,one);
        counter++;
        ReactDOM.render(
            <SimpleCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} />,
            document.querySelector('#app')
        );

    },1000);



################################

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
        <h2>Stopwatch</h2>
        <div id="display">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
  
        <div id="buttons">
          {!timerOn && time === 0 && (
            <button onClick={() => setTimerOn(true)}>Start</button>
          )}
          {timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
          {!timerOn && time > 0 && (
            <button onClick={() => setTime(0)}>Reset</button>
          )}
          {!timerOn && time > 0 && (
            <button onClick={() => setTimerOn(true)}>Resume</button>
          )}
        </div>
      </div>
    );
  };



ReactDOM.render(<App />, document.querySelector("#app"));






//render your react application
 */