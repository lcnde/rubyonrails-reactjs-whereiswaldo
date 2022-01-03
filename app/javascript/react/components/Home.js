import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Home.scss';
import WaldoImage from '../assets/images/waldo.jpg';


const Home = (props) => {
  const [authToken, setAuthToken] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [userCreation, setUserCreation] = useState('usercreated_false')

  useEffect(() => {
    //Authtoken is necessary or else Rails will not accept the form
    const csrfToken = document.getElementsByName("csrf-token")
    // console.log(csrfToken[0].attributes[1].value)
    setAuthToken(csrfToken[0].attributes[1].value);
  }, [])

  const usernameFormSubmit = (e) => {
    e.preventDefault();
    console.log('Username form prevent default')
    const url = 'api/v1/users/create';
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        //Rails automatically accepts json params as long as the content-type header is set to application/json
        'Content-Type': 'application/json'
      },
      body: `{
        "username": "${props.username}",
        "authenticity_token": "${authToken}"
      }`,
    }).then(response => {
      //raw response
      // console.log(response)
      return response.json()
    }).then(response => {
      //json response
      console.log(response)
      console.log(response.username)
      if (response.username !== props.username) {
        setErrorMessage(response.username[0])
      } else {
        setErrorMessage('')
        setUserCreation('usercreated_true')
      }
    }).catch(err => {
      console.log(err)
    })
  }


  const usernameHandleChange = (e) => {
    props.setUsername(e.target.value)
  }
  
  const insertUsername = () => {
    return(
      <div className="username-form-container">
        <div className="image-container">
          <div className="waldo-image-overlay unselectable"></div>
          <img className="waldo-image" src={WaldoImage} />
        </div>
        <div className="form-container">
          {/* <form action="/api/v1/users/create" method="POST" id="createUser" name="createUser" onSubmit={formPreventDefault}> */}
          <form id="createUser" name="createUser" onSubmit={usernameFormSubmit}>
            <input name="authenticity_token" type="hidden" value={authToken} />
            <input name="username" placeholder="Insert your gamer tag" onChange={usernameHandleChange} value={props.username} />
            <button type="submit">Confirm</button>
          </form>
        </div>
          {
            //if-else statements don't work inside of react dom, so I wrapped it inside a immediately Invoked Function
            (() => {
              if (errorMessage !== '') {
                return(
                  <div className="error-message">{errorMessage}</div>
                )
              }
            })()
          }
      </div>
    )
  }

  const selectLevel = () => {
    return(
      <h1>Hello {props.username}</h1>
    )
  }

  return(
      <div className="home-container">
        {
            (() => {
              if (userCreation === 'usercreated_false') {
                return(
                  //if the user was not yet created it returns the prompt to create a new user
                  <React.Fragment>
                    {
                      insertUsername()
                    }
                  </React.Fragment>
                )
              } else {
                return(
                  //if the user was created it will display the levels available to play
                  <h1>Hello {props.username}</h1>
                )
              }
            })()
        }
      </div>
  ) 
}

export default Home;
