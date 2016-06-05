require 'json'

class LessonController < ApplicationController

  def new_lesson
    result_array = Array.new

    @adjectives = Adjective.order("RANDOM()").limit(3)
    @adjectives.each do |item|
      json_string = JSON.parse(item.to_json)
      result_json_string = json_string.merge({ "type" => "adjective"})

      result_array << (result_json_string.as_json)
    end

    @nouns = Noun.order("RANDOM()").limit(3)
    @nouns.each do |item|
      json_string = JSON.parse(item.to_json)
      result_json_string = json_string.merge({ "type" => "noun"})

      result_array << (result_json_string.as_json)
    end

    @verbs = Verb.order("RANDOM()").limit(3)
    @verbs.each do |item|
      json_string = JSON.parse(item.to_json)
      result_json_string = json_string.merge({ "type" => "verb"})

      result_array << (result_json_string.as_json)
    end

    render :json => result_array.shuffle

  end

end
