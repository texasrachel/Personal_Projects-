class AddFieldsToItems < ActiveRecord::Migration[6.1]
  def change
    add_column :items, :project_id, :int
  end
end
