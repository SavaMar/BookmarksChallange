class WebsitesController < ApplicationController
  before_action :set_website, only: [:show, :update, :destroy]

  # GET /websites
  def index
    @websites = Website.all

    render json: @websites
  end

  # GET /websites/1
  def show
    render json: @website
  end

  # POST /websites
  def create
    @website = Website.new(website_params)

    if @website.save
      render json: @website, status: :created, location: @website
    else
      render json: @website.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /websites/1
  def update
    if @website.update(website_params)
      render json: @website
    else
      render json: @website.errors, status: :unprocessable_entity
    end
  end

  # DELETE /websites/1
  def destroy
    @website.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_website
      @website = Website.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def website_params
      params.require(:website).permit(:top_url)
    end
end
