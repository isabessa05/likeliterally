class PostsController < ApplicationController
    def index
        posts = Post.all
        render json: posts, status: :ok
    end

    def show
        post = Post.find_by(id: params[:id])
        if post
            render json: post, status: :ok
        else 
            render json: {error: "Post not found"}, status: :not_found
        end
    end

    def create
        post = Post.create(page: params[:page], user_id: session[:user_id], book_id: params[:book_id], quote: params[:quote])
    end

    def destroy
        post = Post.find_by(id: params[:id])
        if post
            post.destroy
            render json: {}, status: :no_content
        else 
            render json: {error: "Post doesn't exist"}, status: :not_found
        end
    end


end
