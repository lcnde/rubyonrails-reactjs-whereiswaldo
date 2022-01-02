import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Home.scss';
import WaldoImage from '../assets/images/waldo.jpg';


const Home = () => {
  const [authToken, setAuthToken] = useState('')

  useEffect(() => {
    //Authtoken is necessary or else Rails will not accept the form
    const csrfToken = document.getElementsByName("csrf-token")
    // console.log(csrfToken[0].attributes[1].value)
    setAuthToken(csrfToken[0].attributes[1].value);
  }, [])

  const usernameSubmitButton = () => {
    document.forms["createUser"].submit();
    console.log('hi')
  }


  const insertUsername = () => {
    return(
      <div className="username-form-container">
        <div className="image-container">
          <div className="waldo-image-overlay unselectable"></div>
          <img className="waldo-image" src={WaldoImage} />
        </div>
        <div className="form-container">
          <form action="/api/v1/users/create" method="POST" id="createUser" name="createUser">
            <input name="authenticity_token" type="hidden" value={authToken} />
            <input name="username" placeholder="Insert your gamer tag" />
            <button type="reset" onClick={() => usernameSubmitButton()}>Confirm</button>
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
