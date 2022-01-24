class Api::V1::ScoresController < ApplicationController
  def index
  end

  def new
    @score = Score.new
  end

  def create
    @score  = Score.new(score_params)

    if @score.save
      puts("Score was created!")
      render json: @score
    else
      render json: @score.errors
    end
  end

  private

    def score_params
      params.permit(:user_id, :map_id, :score)
    end
end
