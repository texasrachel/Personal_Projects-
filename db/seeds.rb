# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Items.destroy_all
Project.destroy_all
User.destroy_all

@admin = User.create!(username: 'Chickadee', email: 'chickadee@gmail.com', password)
Project.create!(
  [{
  name: "Backyard",
  img_url: "",
  description: "Firepit for the backyard",
  category: "House",
  instructions_link: "",
  for: "Home",
}]
)

p "Created #{Project.count} projects"