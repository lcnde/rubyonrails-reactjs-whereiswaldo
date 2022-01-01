class CreateLevels < ActiveRecord::Migration[6.1]
  def change
    create_table :levels do |t|
      t.belongs_to :map
      t.belongs_to :game_character
      t.decimal :x_coords
      t.decimal :y_coords

      t.timestamps
    end
  end
end
