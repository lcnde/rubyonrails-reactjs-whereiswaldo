Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      # get 'coords/index'
      # get '/show/:map', to: 'coords#show'
      get 'levels/index'
      get 'levels/show/:map_id', to: 'levels#show'
    end
  end

  root 'pages#index'
  #catch-all route
  get '/*path' => 'pages#index'
end
