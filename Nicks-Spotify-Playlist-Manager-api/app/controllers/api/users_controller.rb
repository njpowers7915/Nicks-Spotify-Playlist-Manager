class Api::UsersController < ApiController
  before_action :require_login, except: [:create]

  def create
    user = User.create!(user_params)
    render json: { token: user.auth_token }
  end

  def playlists
    user = User.find_by_auth_token!(request.headers[:token])
    render json: { user: { username: user.username, email: user.email, name: user.name }}
  end

  private

  def user_params
    params.require(:user).except(:username, :password, :name, :email)
  end
  
end
