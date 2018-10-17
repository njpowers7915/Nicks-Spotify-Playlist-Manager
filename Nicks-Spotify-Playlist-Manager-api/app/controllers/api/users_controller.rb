class Api::UsersController < ApiController
  before_action :authenticate, except: [:create]

  def new
    @user = User.new
  end

  def show
    render json: User.find(params[:id])
  end

  def create
    user = User.new(user_params)
    if user.save
      render json: {}, status: 200
    else
      render json: {
        error: "Could not create user",
        status: 422
      }, status: 422
    end
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

  def user_params
    params.require(:user).except(:username, :email, :password)
  end

end
