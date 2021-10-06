class AddFieldsToProjects < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :user_id, :int
    add_column :projects, :item_id, :int
  end
end
