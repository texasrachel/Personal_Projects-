class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :img_url
      t.text :description
      t.string :category
      t.string :instructions_link
      t.string :for
      t.text :notes

      t.timestamps
    end
  end
end
