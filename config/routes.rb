Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    namespace :v1 do
      resources :boards, param: :slug, only:[:show] do
        resources :lists, only: [:create, :destroy] do
          resources :cards, only: [:create, :update, :destroy]
        end
      end
    end
  end

  resources :boards, only:[:index, :show, :create], param: :slug

  root to: "boards#index"
end
