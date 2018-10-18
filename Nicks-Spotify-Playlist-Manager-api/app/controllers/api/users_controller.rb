class Api::UsersController < ApiController
  before_action :authenticate_user, except: [:create]
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: @user
  end

  def create
    user = User.new(user_params)
    if @user.valid? && @user.save
      render json: @user, status: 200
    else
      render json: {errors: "Could not create user"}
    end
  end

  def destroy
    @user.delete
  end

  def profile
    user = User.find_by_auth_token!(request.headers[:token])
    user_playlists = Playlist.where(user_id: user.id)
    render json: {
      user: { username: user.username, email: user.email },
      playlists: user_playlists
    }
  end

  private

  def set_user
    @user = User.find_by(id: params[:id])
  end

  def user_params
    params.require(:user).except(:username, :email, :password)
  end

end
