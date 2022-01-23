import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Router from '../routes/Router';
import '../stylesheets/cssReset.scss';
import '../stylesheets/main.scss';
import Header from '../components/Header';

const App = () => {
  //remember to set level back to '' after development
  const [level, setLevel] = useState(['level_one', 'Ski Slopes'])
  //remember to set username to '' after development
  const [username, setUsername] = useState('')
  const [userId, setUserId] = useState('')
  //remember to set back usercreated_false after development
  const [userCreation, setUserCreation] = useState('usercreated_false')
  const [location, setLocation] = useState('')
  
  return(
    <React.Fragment>
      <Router level={level}
              setLevel={setLevel}
              username={username}
              setUsername={setUsername}
              userCreation={userCreation}
              setUserCreation={setUserCreation}
              location={location}
              setLocation={setLocation}
              userId={userId}
              setUserId={setUserId} />
    </React.Fragment>
  ) 
}

export default App;
