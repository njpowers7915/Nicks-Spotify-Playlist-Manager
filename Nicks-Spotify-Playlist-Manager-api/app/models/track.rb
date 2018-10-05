class Track < ApplicationRecord
  has_many :playlists_tracks
  has_many :tracks, through: :playlists_tracks
end
