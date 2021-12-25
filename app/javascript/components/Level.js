import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Level = () => {
  const [coords, setCoords] = useState([])

  //equals to componentDidMount
  useEffect(() => {
    const url = "/api/v1/show/1"
    fetch(url).then(response => {
      if (response.status === 200){
        console.log('Status 200')
        return response.json();
      } else {
        throw new Error('Something went wrong')
      }
    }).then(data => {
        console.log('Request successful')
        console.log('Request data: ', data)
        data.map((element) => {
          // console.log(element)
          setCoords(prevState => [...prevState, element])
        })
      }).catch(err => console.log(err))
    }, [])
    
    console.log("Current coords status:", coords)

  return(
    <React.Fragment>
      <h1>Level 1 page</h1>
      <Link
        to="/"
      >
        Go back to home
      </Link>
      <br/>
      {
        coords.map(data => 
          <h1>{data.x_coords}</h1>
        )
      }
    </React.Fragment>
  ) 
}

export default Level;
