import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/Home'
import Level from '../components/Level'

const Router = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="level" element={<Level />} />
      </Routes>
    </BrowserRouter>
  ) 
}

export default Router;
