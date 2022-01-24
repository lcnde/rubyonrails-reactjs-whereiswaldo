import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../stylesheets/Home.scss';
import WaldoImage from '../assets/images/waldo.jpg';
import skiSlopes from '../assets/images/skiSlopes.jpeg';
import spaceStation from '../assets/images/spaceStation.jpeg';
import fruitLand from '../assets/images/fruitLand.jpeg';

const Home = (props) => {
  const [authToken, setAuthToken] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [scores, setScores] = useState('')

  const currentLocation = useLocation();
  
  useEffect(() => {
    const currentLocationFunction = (() => {
      console.log(`Location: ${currentLocation.pathname}`)
      props.setLocation(currentLocation.pathname)
    })();

  }, [])
  
  useEffect(() => {
    //Authtoken is necessary or else Rails will not accept the form
    const csrfToken = document.getElementsByName("csrf-token")
    // console.log(csrfToken[0].attributes[1].value)
    setAuthToken(csrfToken[0].attributes[1].value);
    // Reset the state level when the user comes back to home page
    props.setLevel('')
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
      console.log(response.id)
      if (response.username !== props.username) {
        setErrorMessage(response.username[0])
      } else {
        setErrorMessage('')
        props.setUserCreation('usercreated_true')
        props.setUserId(response.id)
      }
    }).catch(err => {
      console.log(err)
    })
  }

  //fetch scores
  useEffect(() => {
    const url = '/api/v1/scores/index'
    fetch(url).then(response => {
      if (response.status === 200) {
        console.log('Status 200')
        return response.json();
      } else {
        throw new Error('Something went wrong fetching the scores')
      }
    }).then(response => {
      console.log('Request data: ', response)
      setScores(response)
    }).catch(err=>{console.log(err)})
  },[])
  
  const usernameHandleChange = (e) => {
    props.setUsername(e.target.value)
  }
  
  const linkToLevel = (lvl) => {
    props.setLevel(lvl);
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
      <div className="select-level-container">
        <div className="levels-container">
          <Link to="/level" onClick={() => linkToLevel(['level_one', 'Ski Slopes'])}>
            <img src={skiSlopes} />
            <h2 className="level-title">Easy - Ski Slopes</h2>
          </Link>
          <Link to="/level" onClick={() => linkToLevel(['level_two', 'Space Station'])}>
            <img src={spaceStation} />
            <h2 className="level-title">Medium - Space Station</h2>
          </Link>
          <Link to="/level" onClick={() => linkToLevel(['level_three', 'Fruit Land'])}>
            <img src={fruitLand} />
            <h2 className="level-title">Hard - Fruit Land</h2>
          </Link>
        </div>
      </div>
    )
  }

  return(
      <div className="home-container">
        {
          //everything is wrapped inside an immediately invoked function otherwise it is not possible to do an if statement
          (() => {
            if (props.userCreation === 'usercreated_false') {
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
                <React.Fragment>
                  {
                    selectLevel()
                  }
                </React.Fragment>
              )
            }
          })()
        }
        <div className="scores-container">
          <h2>Scores</h2>
          <div className="scores-list">

          {
            (()=>{
              if (scores) {
                let scoresArray = []
                for(let i = 0; i < Object.keys(scores).length; i++){
                  // console.log(i)
                  scoresArray.push(scores[i])
                }
                let listScores = scoresArray.map((e)=>{
                  return (
                    <div className="score-row">
                      <span>{e.user_name}</span>
                      <span>{e.map_name}</span>
                      <span>{("0" + Math.floor((e.score / 60))).slice(-2)}:{("0" + Math.floor((e.score % 60))).slice(-2)}</span>
                    </div>
                  )
                })
                return listScores
              }
            })()
          }
          </div>
        </div>
      </div>
  ) 
}

export default Home;
