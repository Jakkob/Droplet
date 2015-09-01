require 'rails_helper'
require 'faker'

RSpec.describe Sugar, type: :model do
  describe 'Positive test cases' do

  	before(:context) do
  		@spec_sugar = build(:sugar)
  	end
	
	  it 'validates for the presence of :reading' do
	  	expect validate_presence_of(:reading)
	  end
	
	 	it 'validates for the presence of :time' do
	 		expect validate_presence_of(:time)
	 	end
	
	 	it 'returns the :reading as an Integer' do
	 		expect(@spec_sugar.reading).to be_an(Integer)
	 	end
	
  	it 'returns the :time as a Time' do
  		expect(@spec_sugar.time).to be_a(Time)
 		end

 		after(:context) { @spec_sugar.destroy }
 	end

 	describe 'Outlier test cases' do
 		
 		it 'is invalid if :reading is less than 40' do
 			@spec_sugar = build(:sugar, reading: Faker::Number.between(0, 39))
 			expect(@spec_sugar).to be_invalid
 			@spec_sugar.destroy
 		end

 		it 'is invalid if :reading is greater than 150' do
 			@spec_sugar = build(:sugar, reading: Faker::Number.between(151, 99999))
 			expect(@spec_sugar).to be_invalid
 			@spec_sugar.destroy
 		end

 		it 'is invalid if :reading is within range but negative' do
 			@spec_sugar = build(:sugar, reading: Faker::Number.between(-150, -40))
 			expect(@spec_sugar).to be_invalid
 			@spec_sugar.destroy
 		end

 		it 'is valid if :reading is given a decimal value that is within range' do
 			prng = Random.new
 			@spec_sugar = build(:sugar, reading: prng.rand(40.000..150.000))
 			expect(@spec_sugar).to be_valid
 			@spec_sugar.destroy
 		end

 		it 'is invalid if the :time is in the future' do
 			@spec_sugar = build(:sugar, time: Faker::Time.between(DateTime.current + 1, DateTime.current + 3))
 			expect(@spec_sugar).to be_invalid
 			@spec_sugar.destroy
 		end
 	end
end





















