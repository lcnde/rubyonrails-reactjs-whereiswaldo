import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import skiSlopes from '../assets/images/skiSlopes.jpeg';
import spaceStation from '../assets/images/spaceStation.jpeg';
import fruitLand from '../assets/images/fruitLand.jpeg';
import odlawProfilePic from '../assets/images/odlaw-profile-pic.jpg';
import waldoProfilePic from '../assets/images/waldo-profile-pic.jpg';
import wendaProfilePic from '../assets/images/wenda-profile-pic.jpg';
import wizardProfilePic from '../assets/images/wizard-profile-pic.jpg';



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
  //fetches coords from API
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
    <div className="level-main-container">
      {/* <h1>{props.level}</h1> */}
      <div class="characters-and-timer-container">
        <div class="characters-container">
          <img src={waldoProfilePic} />
          <img src={wendaProfilePic} />
          <img src={odlawProfilePic} />
          <img src={wizardProfilePic} />
        </div>
        <div class="timer-container">
          <h2>00:00</h2>
        </div>
      </div>
      <img className="level-image" src={skiSlopes} />
      {/* {
        coords.map(data => 
          <h1>{data.x_coords}</h1>
          )
        } */}
    </div>
  ) 
}

export default Level;
