require 'rails_helper'

RSpec.describe Api::V1::BookmarksController do
  let!(:bookmark) { bookmark = FactoryBot.create(:bookmark) }

  describe "GET #index" do
    before(:each) do
      get :index, { format: :json }
    end
    it { expect(response).to have_http_status(:success) }
    it 'renders all existing bookmarks' do
      rendered_response = JSON.parse(response.body)
      expect(rendered_response[0]["url"]).to eq bookmark.url
    end
    it { should route(:get, '/api/v1/bookmarks').to(action: :index) }
  end

  describe 'GET #show' do
    context 'with success response' do
      before(:each) do
        get :show, params: { id: bookmark.id, format: :json }
      end
      it { expect(response).to have_http_status(:success) }
      it { should route(:get, '/api/v1/bookmarks/1').to(action: :show, id: 1) }
    end
  end

  describe "POST #create" do
    context "with params" do
      it "creates and renders a JSON response with the new bookmark" do
        expect {
          post :create, params: {
            bookmark: FactoryBot.attributes_for(:bookmark).merge(bookmark_id: bookmark.id), format: :json
          }
        }.to change(Bookmark, :count).by(1)
        expect(response).to have_http_status(:created)
        expect(response.content_type).to eq('application/json')
      end
    end
  end

  describe "PUT #update" do
    it "update bookmark" do
      bookmark = FactoryBot.create(:bookmark)
      put :update, params: {format: :json, id: bookmark.id, bookmark: {title: "New Other title"}}
      expect(response).to  have_http_status(:ok)
      expect(assigns(:bookmark).title).to  eq("New Other title")
      expect(response.content_type).to eq('application/json')
    end
  end

  describe "DELETE #destroy" do
    it "destroys the requested bookmark" do
      bookmark = FactoryBot.create(:bookmark)
      expect {
        delete :destroy, params: {id: bookmark.to_param}
      }.to change(Bookmark, :count).by(-1)
    end
  end


end
