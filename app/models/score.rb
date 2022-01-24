class Score < ApplicationRecord
  belongs_to :map
  belongs_to :user
end
