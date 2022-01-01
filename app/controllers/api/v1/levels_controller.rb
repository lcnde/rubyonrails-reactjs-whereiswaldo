class Api::V1::LevelsController < ApplicationController
  def index
    level = Level.all
    render json: level
  end

  def show
    if level
      render json: level
    else
      render json: level.errors
    end
  end

  private
    def level
      @level = Level.all.where(map_id: params[:map_id])
    end
end
