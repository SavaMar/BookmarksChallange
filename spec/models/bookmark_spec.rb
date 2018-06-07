require 'rails_helper'

RSpec.describe Bookmark, type: :model do
  let!(:bookmark) { bookmark = FactoryBot.create(:bookmark) }

  describe 'validations' do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:url) }

    it "is not valid without a website" do
      expect(Bookmark.new(website_id:nil)).not_to be_valid
    end   
  end

  describe 'associations' do
    it { should belong_to(:website) }
    it { should have_many(:taggings) }
    it { should have_many(:tags) }
  end
end