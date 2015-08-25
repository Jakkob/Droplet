class Api::V1::MealsController < ApplicationController
  
  before_filter :authenticate_user_from_token!

  def index
  	render :json Meal.all
  end

  def create
  	respond_to do |format|
      format.json do
        @meal = Meal.create(meal_params)
        render json: @meal, status: 201
      end
    end
  end

  #def destroy
  #end

  private
  def meal_params
  	params.require(:meal).permit(:time)
  end
end
