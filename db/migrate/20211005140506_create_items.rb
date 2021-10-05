class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.text :description
      t.string :category
      t.string :img_url
      t.integer :price
      t.string :url
      t.string :store_name
      t.string :store_address
      t.boolean :bought
      t.string :currently_at
      t.text :notes

      t.timestamps
    end
  end
end
