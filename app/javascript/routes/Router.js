import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home'
import Level_one from '../components/Level_one'

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="level_one" element={<Level_one />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default Router;
