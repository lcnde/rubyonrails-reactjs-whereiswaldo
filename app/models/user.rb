class User < ApplicationRecord
  validates :username, presence: true, length: {minimum: 2, maximum: 10, too_long: "Username must be maximum 10 characters", too_short: "Username must be at least 2 characters"}
end
