class Coord < ApplicationRecord
  validates :map, :x_coords, :y_coords, :character, presence: true
end
