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

@admin = User.create!(
  username: 'chickadee', 
  email: 'chickadee@gmail.com', 
  password: '111111')

p "Created #{User.count} users"

Project.create!(
  name: "Backyard",  
  user: @admin, 
  description: "Add firepit, chairs, and sunsail to backyard", 
  category: "Home")
Project.create!(
  name: "Knit Gnome",  
  user: @admin,
  escription: "Knit a gnome", 
  category: "Knitting")
Project.create!(
  name: "Keyboard",  
  user: @admin, 
  description: "Make a mechanical keyboard", 
  category: "Computers")
Project.create!(
  name: "Macarons",  
  user: @admin, 
  description: "Make macarons", 
  category: "Cooking")

@projects = Project.all
# @projects_limit = Project.where(project_id: project)

p "Created #{Project.count} projects"

Item.create!(
  name: "Adirondack Chair", 
  projects: @projects, 
  description: "wooden outside chair", 
  category: "furniture", 
  bought: false)
Item.create!(
  name: "Firepit", 
  projects: @projects, 
  description: "fire pit", 
  category: "furniture", 
  bought: false)
Item.create!(
  name: "Ground Rock", 
  projects: @projects, 
  description: "rock for around firepit", 
  category: "gardening", 
  bought: true)
Item.create!(
  name: "Sunsail", 
  projects: @projects, 
  description: "sun shade fabric", 
  category: "gardening", 
  bought: false)
Item.create!(
  name: "Sunsail Hook", 
  projects: @projects, 
  description: "hook for house", 
  category: "hardware", 
  bought: false)
Item.create!(
  name: "Sunsail Buckle", 
  projects: @projects, 
  description: "sunsail attachments", 
  category: "hardware", 
  bought: false)
Item.create!(
  name: "Landscape Fabric", 
  projects: @projects, 
  description: "weed block", 
  category: "gardening", 
  bought: true)

p "Created #{Item.count} items"

