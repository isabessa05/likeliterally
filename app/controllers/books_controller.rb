class BooksController < ApplicationController

    def index
        book = Book.all 
        render json: book, status: :ok
    end

    def show
        book = Book.find_by(title: params[:title])
        if book
            render json: book, status: :ok
        else
            render json: {error: "Book doesn't exist"}, status: :not_found
        end

    end

    def create
        book = Book.create(title: params[:title], author: params[:author], description: params[:description], genre: params[:genre])
        if book.valid?
            render json: book, status: :created
        else
            render json: {errors: book.errors.full_messages}, status: :unprocessable_entity
        end

    end

    def destroy
        book = Book.find_by(title: params[:title])
        if book
            book.destroy
            render json: {}, status: :no_content
        else
            render json: {error: "Book doesn't exist"}, status: :not_found
        end

    end
end
