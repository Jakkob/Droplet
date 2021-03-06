class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  skip_before_action :verify_authenticity_token, if: :json_request?


  protected

  def json_request?
    request.format.json?
  end

  def authenticate_user_from_token!
    authenticated = authenticate_with_http_token do |user_token, options|
        email = options[:email].presence
        user       = email && User.find_by_email(email)

        if user && Devise.secure_compare(user.authentication_token, user_token)
          sign_in user, store: false
        else
          render json: 'Invalid authorization.', status: 401
        end
      end

    if !authenticated
      render json: 'No authorization provided.', status: 401
    end
  end
end