import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Header.scss';
import Icon from '@mui/material/Icon';

const Header = (props) => {
  return(
    <div className="header-container">
      <div className="home-button">
        <Link to="/">
          <Icon className="home-icon">home</Icon>
        </Link>
      </div>
      <div className="level-info">Ski Slopes - 00:00</div>
      <div className="user-greet">
        <span className="welcome">Welcome</span>
        <span className="welcome-username">{props.username}</span>
      </div>
    </div>
  )
}

export default Header;
