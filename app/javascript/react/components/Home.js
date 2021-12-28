import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Home.scss';
import WaldoImage from '../assets/images/waldo.jpg';


const Home = () => {

  const insertUsername = () => {
    return(
      <div className="username-form-container">
        <div className="image-container">
          <div className="waldo-image-overlay unselectable"></div>
          <img className="waldo-image" src={WaldoImage} />
        </div>
        <div className="form-container">
          <form>
            <fieldset>
              <label>
                <input name="username" placeholder="Insert your gamer tag" />
              </label>
            </fieldset>
            <button type="submit">Confirm</button>
          </form>
        </div>
      </div>
    )
  }

  return(
      <div className="home-container">
        {/* <Link
          to="level_one"
          >
          Level 1
        </Link> */}
        {insertUsername()}
      </div>
  ) 
}

export default Home;
