Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :websites
      resources :bookmarks
    end
  end
end
