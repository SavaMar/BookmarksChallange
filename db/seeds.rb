# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bookmark.create!([
  {title: 'Some title', url: '  https://www.reddit.com/r/rails/comments/8o4whz/what_are_your_thoughts_on_fixtures/'},
  {title: 'Fisa', url: '  https://medium.com/@bruno_boehm/maby_somedfj_dkf'},
  {title: 'Dev Tools', url: '  http://getbootstrap.com/docs/3.3/components/#navbar'},
  {title: 'Corn', url: '  https://www.nopio.com/blog/rails-api-tests-rspec/djfhdfh'},
  {title: 'Rage The Mashine', url: '  https://mlsdev.com/blog/103-the-tale-of-the-web-back-end-and-rails'},
  {title: 'Rails Dev', url: '  https://www.reddit.com/r/rails/comments/8p8a4v/why_is_it_so_hard_to_find_rails_devs/'}
])
# Tag.create!([
#   {name: "Dev"}, {name: "Politics"}, {name: "Biking"}, {name: "Ruby"}, {name: "Links"}
#   ])