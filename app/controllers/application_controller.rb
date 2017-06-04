class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :set_locale

  def set_locale
    begin
      I18n.locale = extract_locale_from_accept_language_header
    rescue I18n::InvalidLocale
      I18n.locale = 'en'
    end
  end

  def angular
    render 'layouts/application'
  end

  respond_to :json

  private
  def extract_locale_from_accept_language_header
    request.env['HTTP_ACCEPT_LANGUAGE'].scan(/^[a-z]{2}/).first
  end
end
