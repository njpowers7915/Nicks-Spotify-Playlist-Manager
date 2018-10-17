class User < ApplicationRecord
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true

  has_secure_password
  #has_secure_token :auth_token

  has_many :playlists
  has_many :tracks, through: :playlists


end
