# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Coord.create(map: 1, x_coords: 15.201, y_coords: 12.555, character: 'Waldo')
# Coord.create(map: 1, x_coords: 904.201, y_coords: 145.555, character: 'super mario')
# Coord.create(map: 1, x_coords: 532.201, y_coords: 1888.555, character: 'lauigi')

Map.create(name: 'Ski Slopes')
Map.create(name: 'Space Station')
Map.create(name: 'Fruit Land')

GameCharacter.create(character_name: 'Waldo')
GameCharacter.create(character_name: 'Wenda')
GameCharacter.create(character_name: 'Wizard Whitebeard')
GameCharacter.create(character_name: 'Odlaw')

Level.create(map_id: 1, game_character_id: 1, x_coords: 1641, y_coords: 900)
Level.create(map_id: 1, game_character_id: 2, x_coords: 941, y_coords: 507)
Level.create(map_id: 1, game_character_id: 3, x_coords: 132, y_coords: 919)
Level.create(map_id: 1, game_character_id: 4, x_coords: 609, y_coords: 778)

Level.create(map_id: 2, game_character_id: 1, x_coords: 778, y_coords: 766)
Level.create(map_id: 2, game_character_id: 2, x_coords: 566, y_coords: 631)
Level.create(map_id: 2, game_character_id: 3, x_coords: 1499, y_coords: 711)
Level.create(map_id: 2, game_character_id: 4, x_coords: 135, y_coords: 843)

Level.create(map_id: 3, game_character_id: 1, x_coords: 1711, y_coords: 811)
Level.create(map_id: 3, game_character_id: 2, x_coords: 255, y_coords: 1038)
Level.create(map_id: 3, game_character_id: 3, x_coords: 474, y_coords: 605)
Level.create(map_id: 3, game_character_id: 4, x_coords: 1268, y_coords: 687)
