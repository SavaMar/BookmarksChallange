module Api::V1
  class TagsController < ApplicationController
    before_action :set_tag, only: [:show, :update, :bookmarks, :destroy]

    def index
      @tags = Tag.all

      render json: @tags
    end

    # GET /tag/1
    def show
      # binding.pry
      render json: @tag
    end

    # POST /tag
    def create
      @tag = Tag.new(tag_params)

      if @tag.save
        render json: @tag, status: :created, location: @tag
      else
        render json: @tag.errors, status: :unprocessable_entity
      end
    end

    # PATCH/PUT /tag/1
    def update
      if @tag.update(tag_params)
        render json: @tag
      else
        render json: @tag.errors, status: :unprocessable_entity
      end
    end

    # DELETE /websites/1
    def destroy
      @website.destroy
    end

    def bookmark
      @tag.bookmarks
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_tag
        @tag = Tag.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def tag_params
        params.require(:tag).permit(:name)
      end
  end
end
