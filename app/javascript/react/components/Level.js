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
  const [foundCharacter, setFoundCharacter] = useState({waldo: "red", wenda: "red", odlaw: "red", wizard:"red"})
  
  useEffect(() => {
    const currentLocationFunction = (() => {
      console.log(`Location: ${currentLocation.pathname}`)
      props.setLocation(currentLocation.pathname)
    })();

  }, [])

  //chooses which level to return for the query
  const returnLevel = () => {
    if (props.level[0] === "level_one") {
      return 1
    } else if (props.level[0] === "level_two") {
      return 2
    } else if (props.level[0] === "level_three") {
      return 3
    }
  }
  //equals to componentDidMount
  //fetches coords from API based on level
  useEffect(() => {
    const url = `/api/v1/levels/show/${returnLevel()}`
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


    // gets the coordinates of user clicks
    // calculates the width of the canvas
    function getCursorPosition(canvas, event) {
      const rect = canvas.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      console.log("x: " + x + " y: " + y)
    }
    useEffect(() => {
      const canvas = document.getElementById('canvas')
      canvas.addEventListener('mousedown', function(e) {
          getCursorPosition(canvas, e)
        })
      let width = canvas.clientWidth;
      let height = canvas.clientHeight;
      console.log(width, height)
    }, [])




    //displays image based on the level
    const levelImage = () => {
      if (props.level[0] === "level_one") {
        return (
          <img id="canvas" className="level-image" src={skiSlopes} />
        )
      } else if (props.level[0] === "level_two") {
        return(
          <img id="canvas" className="level-image" src={spaceStation} />
        )
      } else if (props.level[0] === "level_three") {
        return(
          <img id="canvas" className="level-image" src={fruitLand} />
        )
      }
    }

    // console.log("Current coords status:", coords)
    console.log(`Level: ${props.level}`)

    // this function assigns the color around the character (red if there were NOT found, lightgreen if they WERE found)
    const characterBorder = (char) => {
      let color = foundCharacter[char]
      return {border: `3px solid ${color}`}
    }

  return(
    <div className="level-main-container">
      {/* <h1>{props.level}</h1> */}
      <div className="characters-and-timer-container">
        <div className="characters-container">
          <img style={characterBorder('waldo')} src={waldoProfilePic} />
          <img style={characterBorder('wenda')} src={wendaProfilePic} />
          <img style={characterBorder('odlaw')} src={odlawProfilePic} />
          <img style={characterBorder('wizard')} src={wizardProfilePic} />
        </div>
        <div className="timer-container">
          <h2>00:00</h2>
        </div>
      </div>
      {levelImage()}
      {/* {
        coords.map(data => 
          <h1>{data.x_coords}</h1>
          )
        } */}
    </div>
  ) 
}

export default Level;
