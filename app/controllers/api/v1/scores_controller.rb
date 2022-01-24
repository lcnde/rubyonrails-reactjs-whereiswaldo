class Api::V1::ScoresController < ApplicationController
  def index
    score = Score.all
    # mapName = Map.where(id: score.map_id)
    data = {}

    score.each.with_index do |value, i|
      puts "Score: #{value.id}" 
      data[i] = {
        id: value.id, 
        user_name: User.find_by(id: value.user_id).username, 
        map_name: Map.find_by(id: value.map_id).name,
        score: value.score
      }
    end

    # data = {
    #   "1" => {"key" => "value"},
    #   "2" =>{"key2" => "value2"}
    # }
    render json: data
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
