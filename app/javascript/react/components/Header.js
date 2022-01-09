import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../stylesheets/Header.scss';
import Icon from '@mui/material/Icon';

const Header = (props) => {
  
  // const currentLocation = useLocation();
  
  // useEffect(() => {
  //   const currentLocationFunction = (() => {
  //     console.log(`Location: ${currentLocation.pathname}`)
  //     setLocation(currentLocation.pathname)
  //   })();

  // }, [])

  return(
    <div className="header-container">
      <div className="home-button">
        <Link to="/">
          <Icon className="home-icon">home</Icon>
        </Link>
      </div>
      <div className="level-info">
        {/* {props.level[1]} - 00:00 */}
        {
          (()=>{
            if (props.location === '/') {
              return(
                <h1>Where's Waldo</h1>
              )
            } else if (props.location === '/level') {
              return(
                <h1>{props.level[1]} - 00:00</h1>
              )
            }
          })()
        }
      </div>
      <div className="user-greet">
        <span className="welcome">Welcome</span>
        <span className="welcome-username">{props.username}</span>
      </div>
    </div>
  )
}

export default Header;
