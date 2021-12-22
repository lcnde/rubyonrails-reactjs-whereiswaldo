Rails.application.routes.draw do
  root 'pages#index'

  #catch-all route
  get '/*path' => 'pages#index'
end
