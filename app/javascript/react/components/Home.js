import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return(
    <React.Fragment>
      <h1>Home page</h1>
      <Link
        to="level_one"
        >
        Level 1
      </Link>
    </React.Fragment>
  ) 
}

export default Home;
