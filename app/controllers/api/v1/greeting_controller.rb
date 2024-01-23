class Api::V1::GreetingController < ApplicationController
  def random
    greeting = Greeting.order('RANDOM()').first
    render json: { greeting: greeting }
  end
end
