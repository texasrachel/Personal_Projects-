# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Item.destroy_all
Project.destroy_all
User.destroy_all

@admin = User.create!(username: 'Chickadee', first_name: 'SEI', email: 'chickadee@gmail.com', password: '111111')

p "Created #{User.count} users"

Project.create!(name: "Backyard",  user: @admin, description: "Add firepit, chairs, and sunsail to backyard", category: "Home")
Project.create!(name: "Knit Gnome",  user: @admin, description: "Knit a gnome", category: "Knitting")
Project.create!(name: "Keyboard",  user: @admin, description: "Make a mechanical keyboard", category: "Computers")
Project.create!(name: "Macarons",  user: @admin, description: "Make macarons", category: "Cooking")

@projects = Project.all

p "Created #{Project.count} projects"

Item.create!(name: "Adirondack Chair", projects: @projects)
Item.create!(name: "Firepit", projects: @projects)
Item.create!(name: "Ground Rock", projects: @projects)
Item.create!(name: "Sunsail", projects: @projects)
Item.create!(name: "Sunsail Hook", projects: @projects)
Item.create!(name: "Sunsail Buckle", projects: @projects)
Item.create!(name: "Landscape Fabric", projects: @projects)

p "Created #{Items.count} items"