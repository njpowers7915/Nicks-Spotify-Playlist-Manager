class Api::PlaylistsController < ApiController
  before_action :require_login, except: [:index, :show]
  before_action :set_playlist, only: [:show, :update, :destroy]

  def index
    render json: Playlist.all
  end

  def create
    playlist = Playlist.new(playlist_params)
    playlist.user = current_user
    if playlist.save
      render json: playlist
    else
      render json: { message: 'Could not create playlist!' }
    end
  end

  def show
    render json: @playlist
  end

  def update
    if @playlist.update(playlist_params)
      render json: @playlist
    else
      render json: { message: @playlist.errors }, status: 400
    end
  end

  def destroy
    if @playlist.destroy
      render status: 204
    else
      render json: { message: "Unable to remove this playlist" }, status: 400
    end
  end

  private

    def set_playlist
      @playlist = Playlist.find_by(id: params[:id])
    end

    def playlist_params
      params.require(:playlist).permit(:name, :description)
    end

end
