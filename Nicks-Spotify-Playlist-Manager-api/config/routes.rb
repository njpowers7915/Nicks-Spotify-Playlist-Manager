Rails.application.routes.draw do
  namespace :api do
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'
    post '/signup', to: 'users#create'

    resources :users
    get '/playlists', to: 'users#profile'

    resources :playlists
    resources :tracks

  end
end
