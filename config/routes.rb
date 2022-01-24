Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      post 'users/create', to: 'users#create'
      # get 'coords/index'
      # get '/show/:map', to: 'coords#show'
      get 'levels/index'
      get 'levels/show/:map_id', to: 'levels#show'
      get 'scores/index'
      get 'scores/new'
      post 'scores/create', to: 'scores#create'
    end
  end

  root 'pages#index'
  #catch-all route
  get '/*path' => 'pages#index'
end
