import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Level = (props) => {
  const [coords, setCoords] = useState([])

  const currentLocation = useLocation();
  
  useEffect(() => {
    const currentLocationFunction = (() => {
      console.log(`Location: ${currentLocation.pathname}`)
      props.setLocation(currentLocation.pathname)
    })();

  }, [])


  //equals to componentDidMount
  useEffect(() => {
    const url = "/api/v1/levels/show/1"
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
    

    // console.log("Current coords status:", coords)
    console.log(`Level: ${props.level}`)

  return(
    <React.Fragment>
      <h1>{props.level}</h1>
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
