require 'faker'

FactoryGirl.define do
  factory :sugar do |f|
    f.reading { Faker::Number.between(40, 150) }
    f.time { Faker::Time.between(DateTime.current - 1, DateTime.current) }
  end

end
