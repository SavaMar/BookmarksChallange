class Bookmark < ApplicationRecord
  belongs_to :website, optional: true

  before_save :set_website, :generate_short_url

  validates :short_url, uniqueness: true, presence: false

  private
  def set_website
    top_url = URI.parse(self.url).host.match(/\w*.com$/)[0]
    self.website_id = Website.find_or_create_by(top_url: top_url).id
  end

  def generate_short_url
    chars = ['0'..'9', 'A'..'Z', 'a'..'z'].map { |range| range.to_a }.flatten
    self.short_url = 6.times.map { chars.sample }.join
  end

  # def self.search(query)
  #   where(["title  like ? or 
  #           url like ?", "%#{query}%","%#{query}%"])
  # end
end
