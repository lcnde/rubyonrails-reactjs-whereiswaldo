import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Stopwatch = (props) => {
  const [stopTime, setStopTime] = useState(false)

  useEffect(() => {
    if (props.start === false) {
      setStopTime(true)
    }
  })

  useEffect(() => {
    let interval = null;

    if (props.start) {
      interval = setInterval(() => {
        props.setTime(prevTime => prevTime + 1)
        if (setStopTime) {
          clearInterval(interval)
        }
        // console.log(props.start)
      }, 1000)
    }
  }, [props.start]) //only re-run if component changes

  return (
    <div className="stopwatch">
      <h2>{("0" + Math.floor((props.time / 60))).slice(-2)}:{("0" + Math.floor((props.time % 60))).slice(-2)}</h2>
    </div>
    )
}

export default Stopwatch;
