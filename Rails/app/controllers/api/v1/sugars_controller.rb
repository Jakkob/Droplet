class Api::V1::SugarsController < ApplicationController
  
  # respond_to :json
  before_filter :authenticate_user_from_token!

  def index
  	render json: Sugar.all
  end

	def create
		respond_to do |format|
			format.json do
				@sugar = Sugar.create(sugar_params)
				render json: @sugar, status: 201
			end
		end
	end

#  def destroy
#  end

	private
	def sugar_params
		params.require(:sugar).permit(:reading, :time)
	end
end
