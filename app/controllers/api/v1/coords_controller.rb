class Api::V1::CoordsController < ApplicationController
  def index
    coord = Coord.all
    render json: coord
  end

  def show
    if coord
      render json: coord
    else
      render json: coord.errors
    end
  end

  private

  def coord
    @coord = Coord.all.where(map: params[:map])
  end

end
