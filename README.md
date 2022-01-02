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

# Database Tables

(waldo wenda odlaw wizard)

