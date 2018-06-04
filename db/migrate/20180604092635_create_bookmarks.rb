class CreateBookmarks < ActiveRecord::Migration[5.1]
  def change
    create_table :bookmarks do |t|
      t.belongs_to :website, foreign_key: true
      t.string :title
      t.string :url
      t.string :short_url

      t.timestamps
    end
  end
end
