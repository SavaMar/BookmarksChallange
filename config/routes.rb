Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :websites
      resources :bookmarks do
        get :tags, on: :member
      end
      resources :tags do
        get :bookmarks, on: :member
      end
    end
  end
end
