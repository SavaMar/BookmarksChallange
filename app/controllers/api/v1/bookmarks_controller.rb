module Api::V1
  class BookmarksController < ApplicationController
    before_action :set_bookmark, only: [:show, :update, :destroy]

    # GET /bookmarks
    def index
      @bookmarks = Bookmark.all

      if params[:q]
        @bookmarks = Bookmark.search(params[:query]).order("created_at DESC")
      end

      render json: @bookmarks
    end

    # GET /bookmarks/1
    def show
      render json: @bookmark
    end

    # POST /bookmarks
    def create
      @bookmark = Bookmark.new(bookmark_params)

      if @bookmark.save
        render json: @bookmark, status: :created
      else
        render json: @bookmark.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /bookmarks/1
    def update
      if @bookmark.update(bookmark_params)
        render json: @bookmark
      else
        render json: @bookmark.errors, status: :unprocessable_entity
      end
    end

    # DELETE /bookmarks/1
    def destroy
      @bookmark.destroy
    end

    private
      def set_bookmark
        @bookmark = Bookmark.find(params[:id])
      end

      def bookmark_params
        params.require(:bookmark).permit(:website_id, :title, :url, :short_url)
      end
  end
end