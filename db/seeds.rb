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
  img_url: "https://res.cloudinary.com/texasrachel/image/upload/v1633797712/psp/back1_jddei8.jpg",
  description: "Add firepit, chairs, and sunsail to backyard", 
  category: "Home")
Project.create!(
  name: "Knit Gnome",  
  user: @admin,
  img_url: "https://res.cloudinary.com/texasrachel/image/upload/v1633797709/psp/gnome1_goznzh.jpg",
  description: "Knit a gnome", 
  category: "Knitting")
Project.create!(
  name: "Keyboard",  
  user: @admin, 
  img_url: "https://res.cloudinary.com/texasrachel/image/upload/v1633797709/psp/key4_zhmtda.jpg", 
  description: "Put together a mechanical keyboard",
  category: "Computers")
Project.create!(
  name: "Macarons",  
  user: @admin, 
  img_url: "https://res.cloudinary.com/texasrachel/image/upload/v1633797710/psp/macaron1_lyo0np.jpg",
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
  img_url: 'https://res.cloudinary.com/texasrachel/image/upload/v1633797708/psp/back2_yllmur.jpg',
  bought: false)
Item.create!(
  name: "Firepit", 
  projects: @projects, 
  description: "fire pit", 
  category: "furniture", 
  img_url: 'https://res.cloudinary.com/texasrachel/image/upload/v1633797709/psp/back3_zscvd3.jpg',
  bought: false)
Item.create!(
  name: "Ground Rock", 
  projects: @projects, 
  description: "rock for firepit", 
  category: "gardening", 
  img_url: 'https://res.cloudinary.com/texasrachel/image/upload/v1633797709/psp/back6_nscxuu.jpg',
  bought: true)
Item.create!(
  name: "Sunsail", 
  projects: @projects, 
  description: "sun shade fabric", 
  category: "gardening", 
  img_url: 'https://res.cloudinary.com/texasrachel/image/upload/v1633797709/psp/back8_jx5uql.jpg',
  bought: false)
Item.create!(
  name: "Sunsail Hook", 
  projects: @projects, 
  description: "hook for house", 
  category: "hardware", 
  img_url: 'https://res.cloudinary.com/texasrachel/image/upload/v1633797709/psp/back7_wktycf.jpg',
  bought: false)
Item.create!(
  name: "Sunsail Buckle", 
  projects: @projects, 
  description: "sunsail attachments", 
  category: "hardware", 
  img_url: 'https://res.cloudinary.com/texasrachel/image/upload/v1633797708/psp/back4_gcexa8.jpg',
  bought: false)
Item.create!(
  name: "Landscape Fabric", 
  projects: @projects, 
  description: "weed block", 
  category: "gardening", 
  img_url: 'https://res.cloudinary.com/texasrachel/image/upload/v1633797708/psp/back5_vhk2im.jpg',
  bought: true)

p "Created #{Item.count} items"

