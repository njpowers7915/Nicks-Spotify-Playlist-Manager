class PlaylistSerializer < ApplicationSerializer
  attributes :id, :name, :description, :spotify_id, :spotify_uri, :tracks
  belongs_to :user
  has_many :tracks
end
