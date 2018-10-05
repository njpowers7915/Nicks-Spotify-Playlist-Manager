class PlaylistsTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists_tracks do |t|
      t.integer :playlist_id
      t.integer :track_id
  end
end
