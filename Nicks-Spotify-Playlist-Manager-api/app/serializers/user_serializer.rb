class UserSerializer < ApplicationSerializer
  attributes :id, :name, :playlists
  has_many :playlists
end
