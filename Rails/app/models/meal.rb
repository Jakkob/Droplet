class Meal < ActiveRecord::Base
	validates :time, presence: true
	validates_datetime :time, :on_or_before => DateTime.current
end
