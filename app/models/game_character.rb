class GameCharacter < ApplicationRecord
  validates :character_name, presence: true
  has_many :levels
end
