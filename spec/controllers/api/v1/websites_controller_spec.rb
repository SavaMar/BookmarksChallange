require 'rails_helper'

RSpec.describe Api::V1::WebsitesController do
  let!(:website) { website = FactoryBot.create(:website) }

  describe "GET #index" do
    before(:each) do
      get :index, { format: :json }
    end
    it { expect(response).to have_http_status(:success) }
    it 'renders all existing websites' do
      rendered_response = JSON.parse(response.body)
      expect(rendered_response[0]["top_url"]).to eq website.top_url
    end
    it { should route(:get, '/api/v1/websites').to(action: :index) }
  end

  # describe "POST #create" do
  #   context "with params" do
  #     it "creates and renders a JSON response with the new website" do
  #       expect {
  #         post :create, params: {
  #           website: FactoryBot.attributes_for(:website), format: :json
  #         }
  #       }.to change(Website, :count).by(1)
  #       # expect(@bookmark.url).to match(/\w*.com$/).to eq @website.top_url
  #       expect(response).to have_http_status(:created)
  #       expect(response.content_type).to eq('application/json')
  #     end
  #   end
  # end
end
