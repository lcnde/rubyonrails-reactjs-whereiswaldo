import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Stopwatch = (props) => {
  // const [stopTime, setStopTime] = useState(false)
  
  // useEffect(() => {
    //   if (props.start === false) {
      //     setStopTime(true)
      //   }
      // })
  
  function useInterval(callback, delay) {
    const savedCallback = useRef();
    
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    
    useEffect(() => {
      function tick() {
        // savedCallback.current;
        // console.log(savedCallback.current)
        props.setTime(prevTime => prevTime + 1)
        if (savedCallback.current ===false) {
          console.log(savedCallback.current)
          clearInterval(id);
        }
      }
  
      let id = setInterval(tick, delay);
    }, [delay]);
  }

  useInterval(props.start, 1000)

  //setInterval in the hook always has access to the first value of the variable declared, then never checks again. There is a workaround.
  // useEffect(() => {
  //   let interval = null
  //   if (props.start) {
  //     interval = setInterval(() => {
  //       props.setTime(prevTime => prevTime + 1)
  //     }, 1000);
  //   } else {
  //     clearInterval(interval);
  //   }

  //   // if (stopTime) {
  //   //   console.log('absolutely')
  //   //   clearInterval(interval)
  //   // }
  //   // if (props.start) {
  //   //   console.log(stopTime)
  //   //   interval = setInterval(() => {
  //   //     props.setTime(prevTime => prevTime + 1)
  //   //   }, 1000)
  //   // } 
  // }, [props.start]) //only re-run if component changes

  return (
    <div className="stopwatch">
      <h2>{("0" + Math.floor((props.time / 60))).slice(-2)}:{("0" + Math.floor((props.time % 60))).slice(-2)}</h2>
    </div>
    )
}

export default Stopwatch;
