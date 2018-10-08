class PlaylistTrackSerializer < ApplicationSerializer
  attributes :id, :playlist, :track
  belongs_to :playlist
  belongs_to :track
end
