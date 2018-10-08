Rails.application.routes.draw do
  namespace :api do
    resources :playlists
    resources :tracks
    post 'signup', to: 'users#create'
    post 'login', to: 'sessions#create'
    post 'logout', to: 'sessions#destroy'
  end
end
