Rails.application.routes.draw do
  resources :users, only: :create
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :projects
  resources :items
  put '/projects/:id/items/:item_id', to: 'projects#add_item_to_project'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
