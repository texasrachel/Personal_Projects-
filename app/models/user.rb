class User < ApplicationRecord
  has_many :projects
  # has_many :items, through: :projects
  has_secure_password
  
  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
end
