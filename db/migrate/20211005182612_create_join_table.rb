class CreateJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :projects, :items do |t|
      t.string :project
      t.string :item
  end
end
