class CreateJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :projects, :items do |t|
      # t.index [:project_id, :item_id]
      # t.index [:item_id, :project_id]
    end
  end
end
