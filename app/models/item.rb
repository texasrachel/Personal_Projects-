class Item < ApplicationRecord
  has_and_belongs_to_many :projects
  has_one :user, through: :projects
end
