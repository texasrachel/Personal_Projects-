class ChangeProjectNull < ActiveRecord::Migration[6.1]
  def change
    change_column_null :users, :first_name, false, "first_name"
  end
end
