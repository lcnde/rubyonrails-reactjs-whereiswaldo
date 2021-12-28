import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Home.scss';
import WaldoImage from '../assets/images/waldo.jpg';


const Home = () => {

  const insertUsername = () => {
    return(
      <div class="username-form-container">
        <div class="image-container">
          <div class="waldo-image-overlay unselectable"></div>
          <img class="waldo-image" src={WaldoImage} />
        </div>
        <div class="form-container">
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
      <div class="home-container">
        {/* <h1>Home page</h1>
        <Link
          to="level_one"
          >
          Level 1
        </Link> */}
        {insertUsername()}
      </div>
  ) 
}

export default Home;
