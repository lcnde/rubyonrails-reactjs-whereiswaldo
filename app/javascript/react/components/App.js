import React, { useState, useEffect } from 'react';
import Router from '../routes/Router';
import '../stylesheets/cssReset.scss';
import '../stylesheets/main.scss';
import Header from '../components/Header';

const App = () => {
  const [level, setLevel] = useState('')
  //remember to set username to '' after development
  const [username, setUsername] = useState('Hasbulla')
  //remember to set back usercreated_false after development
  const [userCreation, setUserCreation] = useState('usercreated_true')
  
  return(
    <React.Fragment>
      <Router level={level}
              setLevel={setLevel}
              username={username}
              setUsername={setUsername}
              userCreation={userCreation}
              setUserCreation={setUserCreation}/>
    </React.Fragment>
  ) 
}

export default App;
