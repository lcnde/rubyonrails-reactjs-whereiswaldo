class Level < ApplicationRecord
  validates :map_id, 
            :game_character_id, 
            :x_coords,
            :y_coords, presence: true

  belongs_to :game_character
  belongs_to :map
end
