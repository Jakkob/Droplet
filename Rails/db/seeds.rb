# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
require 'date'

# current_time = DateTime.new(2015, 8, 16, 16, 25)
# three_hours_ago = DateTime.new(2015, 8, 16, 13, 25)
# six_hours_ago = DateTime.new(2015, 8, 16, 10, 25)
# nine_hours_ago = DateTime.new(2015, 8, 16, 7, 25)
# twelve_hours_ago = DateTime.new(2015, 8, 16, 4, 25)

# Sugar.create({ reading: 70, time: current_time })
# Sugar.create({ reading: 110, time: three_hours_ago })
# Sugar.create({ reading: 80, time: six_hours_ago })
# Sugar.create({ reading: 40, time: nine_hours_ago })
# Sugar.create({ reading: 80, time: twelve_hours_ago })
# Meal.create({ time: three_hours_ago })

if !User.any?
	User.create(email: 'test@test.com', password: 'password')
end