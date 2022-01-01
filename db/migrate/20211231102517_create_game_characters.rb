class CreateGameCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :game_characters do |t|
      t.string :character_name

      t.timestamps
    end
  end
end
