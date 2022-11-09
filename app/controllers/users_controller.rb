class UsersController < ApplicationController

    def index
        user = User.all
        render json: user, status: :ok
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else 
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        if user
            user.update(user_params)
            if user.valid?
                render json: user, status: :ok
            else
                render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
            end
        else
            render json: { error: "Not authorized" }, status: :unauthorized
        end

    end

    def destroy
        user = User.find_by(id: session[:user_id])
        if user
            user.destroy
            render json: {"User deleted"} , status: :no_content
        else 
            render json: {error: "User doesn't exist"}, status: :not_found
        end

    end

    private

        def authorize
            return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
        end

        def user_params
            params.permit(:first_name, :last_name, :picture, :username, :password)
        end
end
