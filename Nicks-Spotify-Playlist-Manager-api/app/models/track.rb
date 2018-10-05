class Track < ApplicationRecord
  has_many :playlists_tracks
  has_many :playlists, through: :playlists_tracks
end
