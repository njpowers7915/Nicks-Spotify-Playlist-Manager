# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Track.create(name: 'Levels', artist: 'Avicii')
Track.create(name: 'Heroes', artist: 'Alesso')
Track.create(name: 'Gin & Juice', artist: 'Snoop Dogg')
Track.create(name: 'Wild Out', artist: 'Waka Flocka')

User.create(username: 'Steve', email: 'steve@gmail.com', password_digest: '1121')
User.create(username: 'Nathan', email: 'nathan@gmail.com', password_digest: '121')

Playlist.create(name: 'Rap Playlist', user_id: 1, description: 'A rap playlist')
Playlist.create(name: 'EDM', user_id: 1, description: 'An electronic playlist')
Playlist.create(name: 'Great Playlist', user_id: 2, description: 'A bit of everything')

playlists = Playlist.all
playlists[0].tracks = Track.where(id: [3, 4])
playlists[1].tracks = Track.where(id: [1, 2])
playlists[2].tracks = Track.where(id: [1, 2, 3, 4])
