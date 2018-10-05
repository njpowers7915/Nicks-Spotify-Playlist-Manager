Rails.application.routes.draw do
  namespace :api do
    resources :playlists
    resources :tracks
  end
end
