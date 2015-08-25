class CreateSugars < ActiveRecord::Migration
  def change
    create_table :sugars do |t|
      t.integer :reading
      t.datetime :time

      t.timestamps null: false
    end
  end
end
