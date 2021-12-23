class CreateCoords < ActiveRecord::Migration[6.1]
  def change
    create_table :coords do |t|
      t.integer :map, null: false
      t.decimal :x_coords, null: false
      t.decimal :y_coords, null: false
      t.string :character, null: false

      t.timestamps
    end
  end
end
