class CreatePlaylists < ActiveRecord::Migration[5.2]
  def change
    create_table :playlists do |t|
      t.string :name
      t.integer :user_id
      t.string :description
      t.string :spotify_id
      t.string :spotify_uri

      t.timestamps
    end
  end
end
