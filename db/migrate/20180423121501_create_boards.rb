class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.string :slug
      t.index :slug, unique: true

      t.timestamps
    end
  end
end
