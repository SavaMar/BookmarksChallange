require 'rails_helper'

RSpec.describe Api::V1::BookmarksController do
  let!(:bookmark) { @book = FactoryBot.create(:bookmark) }

  describe "GET #index" do
    it "returns a success response" do
      article = Bookmark.create! valid_attributes
      get :index, params: {}, session: valid_session
      expect(response).to be_success
    end
  end
  # before do
  #   get :index
  # end

  # it "returns http success " do
  #   expect(response).to have_http_status(:success)
  # end

  # it "JSON body response contains expected correct url" do
  #   expect(JSON.parse(response.body)[0]["url"]).to eq 'https://www.reddit.com/r/rails/comments/8o4whz/what_are_your_thoughts_on_fixtures/'
  #   # expect(hash_body.keys).to match_array([:id, :url, :short_url])
  # end
end
