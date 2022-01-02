class Api::V1::UsersController < ApplicationController
  # def index
  #   users = User.all
  #   render json: users
  # end

  # def show
  # end

  def new
    @user = User.new
  end

  def create
    @user  = User.new(user_params)

    if @user.save
      puts("User was created!")
    else
      render json: @user.errors
    end
  end

  # def destroy
  # end

  private

    def user_params
      params.permit(:username)
    end
end
