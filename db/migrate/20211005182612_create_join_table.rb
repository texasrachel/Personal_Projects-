class CreateJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :projects, :items do |t|
      t.string :project_id
      t.string :item_id
  end
end
