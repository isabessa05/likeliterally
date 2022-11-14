class SessionsController < ApplicationController
  
      def create 
        user = User.find_by(username: params[:username])

        if user
         if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, status: :created
          else
          render json: {error: "Invalid username or password" }, status: :unauthorized
          end
        else 
          render json: {error: "User not found, please sign up" }, status: :unauthorized
        end
      end
    
      def destroy
        session.delete :user_id
        head :no_content
      end

end
