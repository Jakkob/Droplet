FactoryGirl.define do
  factory :meal do |f|
    f.time { Faker::Time.between(DateTime.current-3, DateTime.current)}
  end

end
