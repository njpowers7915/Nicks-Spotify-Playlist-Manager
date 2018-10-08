class TrackSerializer < ApplicationSerializer
  attributes :name, :artist, :spotify_id, :spotify_uri
  has_many :playlists, through: :playlist_track_serializer
end
