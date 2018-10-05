class Api::TracksController < ApplicationController

  before_action :set_track, only: [:show, :update]

  def index
    render json: Track.all
  end

  def create
    track = Track.new(track_params)
    if track.save
      render json: track
    else
      render json: { message: track.errors }, status: 400
    end
  end

  def show
    render json: @track
  end

  def update
    if @track.update(track_params)
      render json: @track
    else
      render json: { message: @track.errors }, status: 400
    end
  end

  def destroy
    if @track.destroy
      render status: 204
    else
      render json: { message: "Unable to remove this track" }, status: 400
    end
  end

  private

    def set_track
      @track = Track.find_by(id: params[:id])
    end

    def track_params
      params.require(:track).permit(:name, :description)
    end

end
