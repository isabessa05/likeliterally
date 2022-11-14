class PostsController < ApplicationController

    # before_action :authorize


    def index
        posts = Post.all
        render json: posts, status: :ok
    end

    def bookposts
        posts = Post.where(book_title: params[:book_title])
        render json: posts, status: :ok
    end

    def show #this is not really a show, but a custom action to get the posts based on the user id
        posts = Post.where(user_id: params[:id])
        if posts
            render json: posts, status: :ok
        else 
            render json: {error: "Posts not found"}, status: :not_found
        end
    end

    def create
        post = Post.create(page: params[:page], user_id: session[:user_id], book_title: params[:book_title], quote: params[:quote])
        if post.valid?
            render json: post, status: :created
        else
            render json: {errors: post.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        post = Post.find_by(id: params[:id])
        if post
            post.destroy
            render json: {}, status: :no_content
        else 
            render json: {error: "Post doesn't exist"}, status: :not_found
        end
        
        # private

        # def authorize
        #   return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        # end

    end


end
