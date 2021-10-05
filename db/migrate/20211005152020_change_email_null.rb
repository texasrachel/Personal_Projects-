class ChangeEmailNull < ActiveRecord::Migration[6.1]
  def change
    change_column_null :users, :email, false
    change_column_null :projects, :name, false
    change_column_null :projects, :description, false
    change_column_null :projects, :category, false
    change_column_null :items, :name, false
    change_column_null :items, :description, false
    change_column_null :items, :category, false
    change_column_null :items, :bought, false
  end
end
