# README

# Where is Waldo

## About this app

This app was created to learn how to use React as front-end on Ruby on Rails. 
Rails is used as back-end and handles API requests from the front-end.

# How the app works

The front and back end are treated as 2 different apps.
The front-end comunicates with the back-end using http requests.

The data of where the characters are into the maps are stored inside the database, and when the user open the level, a fetch request is made to the database to fetch the coordinates where the characters hide into the map.
If the user click coordinates cooresponds to the ones fetched from the database (and stored into React state), the character will be selected.

The routes are handled 

## How the clock works
There is a server-side clock so the user can't cheat his scores. 
When the user opens a level, a new Clock record is created.
At this moment, created_at and updated_at are the same.
If the user finds all 4 characters, a request is send to the database in the Clock table that updates "finished" from false to true.
If the user exits the level and enters a new one, a new Clock record is created in the database.
If a new Clock record is created, the app will check its database for previous Clock records from the same user. If there are "finished = false" ones, they will get deleted.
A record is uploaded to the Scores table only if its "finished" attribute is true, meaning that the user has found all 4 characters.
This mechanism is implemented so the database doesn't store unfinished (so therefore obsolete) games records.

edit:
attack user_id to the clock, and delete the clock record only if the same user creates multiple ones without finishing the game. If you delete an unfinished clock record every time a new one is created, it may happen that if 2 users are playing at the same time, when the 2nd creates a new clock, the clock of the 1st will get deleted and his score won't be registered if he finishes the game.

Edit:
The user is creating using Async javascript. With the fetch api a post request is submitted to the server. Rails will automatically understands to assign the request body to params because the request headers contain 'application/json'. 
Also an authenticity token is passed. Without it Rails will not accept user inputs.

Edit:
There is a single component for all levels. When you click a level from the Home, the state will update beased on which level you click. The Level component will display the level based on what level is saved inside the state. 
When the Home component mounts, the level is removed from the state.
The username is saved inside the State inside the App component, so it is potentially available globally, but the main use of it is inside the Header and Score.

# Database Tables

(waldo wenda odlaw wizard)

