class UserBooksController < ApplicationController
    def index
        userbook = UserBook.all
        render json: userbook, status: :ok
    end

    def create
        userbook = UserBooks.create(user_id: session[:user_id], book_id: params[:book_id])
        if userbook.valid?
            render json: userbook, status: :created
        else 
            render json: {errors: userbook.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        userbook = Userbook.find_by(id: params[:id])
        if userbook
          render json: userbook, status: :ok
        else
            render json: {error: "Book doesn't exist"}, status: :not_found
        end
    end


    def destroy
        userbook = UserBook.find_by(id: params[:id])
        if userbook
            userbook.destroy
            render json: {} , status: :no_content
        else 
            render json: {error: "User doesn't exist"}, status: :not_found
        end

    end
end
