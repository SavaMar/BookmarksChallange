module Api::V1
  class BookmarksController < ApplicationController
    before_action :set_bookmark, only: [:show, :update, :tags, :destroy]

    def index
      if params[:q].present?
        @bookmarks = Bookmark.search(params[:q])
      else
        @bookmarks = Bookmark.all.order('id ASC')
      end

      render json: @bookmarks, include: [:tags, :website]
    end

     # GET /flashcards/1/tags
    def tags
      render json: @bookmark.tags
    end

    def show
      render json: @bookmark, include: [:tags, :website]
    end

    def create
      @bookmark = Bookmark.new(bookmark_params)

      if @bookmark.save
        # binding.pry
        render json: @bookmark, include: [:tags, :website], status: :created
      else
        render json: @bookmark.errors, status: :unprocessable_entity
      end
    end

    def update
      if @bookmark.update(bookmark_params)
        render json: @bookmark, include: [:tags, :website]
      else
        render json: @bookmark.errors, status: :unprocessable_entity
      end
    end

    def destroy
      @bookmark.destroy
      if @bookmark.destroy
        head :no_content, status: :ok
      else
        render json: @bookmark.errors, status: :unprocessable_entity
      end  
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