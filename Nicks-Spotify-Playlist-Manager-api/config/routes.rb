Rails.application.routes.draw do
  namespace :api do
    resources :playlists
    resources :tracks
    post 'signup', to: 'users#create'
    post 'login', to: 'sessions#create'
    delete 'logout', to: 'sessions#destroy'

    resources :users
    get "/playlists", to: 'users#playlists'

  end
end
