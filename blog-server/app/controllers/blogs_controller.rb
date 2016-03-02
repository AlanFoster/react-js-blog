class BlogsController < ApplicationController
  before_action :set_blog, only: [:show, :update, :destroy]

  # GET /blogs
  def index
    @blogs = Blog.all

    render json: @blogs
  end

  # GET /blogs/1
  def show
    render json: @blog
  end

  # POST /blogs
  def create
    @blog = Blog.new(create_blog_params)

    if @blog.save
      render json: @blog, status: :created, location: @blog
    else
      render json: @blog.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /blogs/1
  def update
    if @blog.update(update_params)
      render json: @blog
    else
      render json: @blog.errors, status: :unprocessable_entity
    end
  end

  # DELETE /blogs/1
  def destroy
    @blog.destroy
  end

  private

  def set_blog
    @blog = Blog.find_by_uuid(params[:id])
  end

  def create_blog_params
    params.require(:blog).permit(:uuid, :title, :content, :votes)
  end

  def update_params
    params.require(:blog).permit(:votes)
  end
end
