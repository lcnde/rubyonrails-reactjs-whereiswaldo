import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home'
import Level from '../components/Level'

const Router = () => {
  const [username, setUsername] = useState('')

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home  username={username}
                                              setUsername={setUsername} />} />
        <Route path="level" element={<Level />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default Router;
