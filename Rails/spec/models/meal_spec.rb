require 'rails_helper'

RSpec.describe Meal, type: :model do
  describe 'Positive test cases' do

  	before(:context) do
  		@spec_meal = build(:meal)
  	end
	
	 	it 'validates for the presence of :time' do
	 		expect validate_presence_of(:time)
	 	end

  	it 'returns the :time as a Time' do
  		expect(@spec_meal.time).to be_a(Time)
 		end

 		after(:context) { @spec_meal.destroy }
 	end

 	describe 'Outlier test cases' do

 		it 'is invalid if the :time is in the future' do
 			@spec_meal = build(:meal, time: Faker::Time.between(DateTime.current + 1, DateTime.current + 3))
 			expect(@spec_meal).to be_invalid
 			@spec_meal.destroy
 		end
 	end
end
