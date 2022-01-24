class Map < ApplicationRecord
  validates :name, presence: true
  has_many :levels
  has_many :scores
end
