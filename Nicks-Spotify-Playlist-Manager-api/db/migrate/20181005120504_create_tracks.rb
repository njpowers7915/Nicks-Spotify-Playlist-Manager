class CreateTracks < ActiveRecord::Migration[5.2]
  def change
    create_table :tracks do |t|
      t.string :name
      t.string :artist
      t.string :spotify_id
      t.string :spotify_uri

      t.timestamps
    end
  end
end
