import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../stylesheets/Header.scss';
import Icon from '@mui/material/Icon';

const Header = (props) => {

  // home button will be visible only if the use is no already on the home page
  const homeButtonVisibility = () => {
    if (props.location !== '/') {
      return(
        <div className="home-button">
          <Link to="/">
            <Icon className="home-icon">home</Icon>
          </Link>
        </div>
      )
    } else {
      return <div></div>
    }
  }

  return(
    <div className="header-container">
      {homeButtonVisibility()}
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
                <h1>{props.level[1]}</h1>
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
