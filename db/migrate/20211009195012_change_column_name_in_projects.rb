class ChangeColumnNameInProjects < ActiveRecord::Migration[6.1]
  def change
    rename_column(:projects, :for, :made_for)
  end
end
