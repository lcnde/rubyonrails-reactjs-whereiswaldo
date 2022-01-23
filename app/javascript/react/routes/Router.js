import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Level from '../components/Level';
import Header from '../components/Header';

const Router = (props) => {

  return(
    <BrowserRouter>
      <Header username={props.username}
              level={props.level}
              location={props.location} />
      <Routes>
        <Route path="/" exact element={<Home  username={props.username}
                                              setUsername={props.setUsername}
                                              setLevel={props.setLevel} 
                                              userCreation={props.userCreation}
                                              setUserCreation={props.setUserCreation}
                                              setLocation={props.setLocation}
                                              userId={props.userId}
                                              setUserId={props.setUserId} />} />
        <Route path="level" element={<Level level={props.level}
                                            setLocation={props.setLocation} />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default Router;
