class Sugar < ActiveRecord::Base
	validates :reading, presence: true, numericality: { only_interger: true, greater_than_or_equal_to: 40, less_than_or_equal_to: 150 }
	validates :time, presence: true
	validates_datetime :time, :on_or_before => DateTime.current

end
