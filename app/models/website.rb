class Website < ApplicationRecord

  has_many :bookmarks
  validates :top_url, presence: true
end
