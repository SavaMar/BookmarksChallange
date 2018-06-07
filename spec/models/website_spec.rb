require 'rails_helper'

RSpec.describe Website, type: :model do
  let!(:website) { website = FactoryBot.create(:website) }

  describe 'validations' do
    it { should validate_presence_of(:top_url) }

    it "is not valid without a top_url" do
      expect(Website.new(top_url:nil)).not_to be_valid
    end   
  end

  describe 'associations' do
    it { should have_many(:bookmarks) }
  end
end