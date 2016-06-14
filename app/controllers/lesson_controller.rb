require 'json'
require 'logger'

class LessonController < ApplicationController

  protect_from_forgery with: :exception

  logger = Logger.new(STDOUT)
  logger.level = Logger::INFO

  def new_lesson
    result_array = Array.new

    @adjectives = Adjective.order("RANDOM()").limit(3)
    logger.info("Selected #{@adjectives.length} adjectives from DB")
    @adjectives.each do |item|
      json_string = JSON.parse(item.to_json)
      result_json_string = json_string.merge({ "type" => "adjective"})

      result_array << (result_json_string.as_json)
    end

    @nouns = Noun.order("RANDOM()").limit(3)
    logger.info("Selected #{@nouns.length} nouns from DB")
    @nouns.each do |item|
      json_string = JSON.parse(item.to_json)
      result_json_string = json_string.merge({ "type" => "noun"})

      result_array << (result_json_string.as_json)
    end

    @verbs = Verb.order("RANDOM()").limit(3)
    logger.info("Selected #{@verbs.length} verbs from DB")
    @verbs.each do |item|
      json_string = JSON.parse(item.to_json)
      result_json_string = json_string.merge({ "type" => "verb"})

      result_array << (result_json_string.as_json)
    end

    render :json => result_array.shuffle

  end

end
