# frozen_string_literal: true

Rails.application.routes.draw do
  root 'rootpage#index'

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      get '/greeting_random', to: 'greeting#random'
    end
  end
end
