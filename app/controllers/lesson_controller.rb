require 'json'
require 'logger'

class LessonController < ApplicationController

  protect_from_forgery with: :exception

  logger = Logger.new(STDOUT)
  logger.level = Logger::ERROR

  def new_lesson

    result_array = Array.new

    @adjectives = Adjective.order("RAND()").limit(3)
    logger.info("Selected #{@adjectives.length} adjectives from DB")
    @adjectives.each do |item|

      json_string = JSON.parse("{}")

      result_json_string = json_string.merge!({ "type" => "adjective"})
      result_json_string = json_string.merge!({ "word" => item.word})

      if I18n.locale == :ru
        result_json_string = json_string.merge!({ "translation" => item.ru_translation})
      elsif I18n.locale == :uk
        result_json_string = json_string.merge!({ "translation" => item.uk_translation})
      elsif I18n.locale == :pl
        result_json_string = json_string.merge!({ "translation" => item.pl_translation})
      elsif I18n.locale == :en
        result_json_string = json_string.merge!({ "translation" => item.en_translation})
      end

      result_array << (result_json_string.as_json)
    end

    @nouns = Noun.order("RAND()").limit(3)
    logger.info("Selected #{@nouns.length} nouns from DB")
    @nouns.each do |item|

      json_string = JSON.parse("{}")

      result_json_string = json_string.merge!({ "type" => "noun"})
      result_json_string = json_string.merge!({ "word" => item.word})
      result_json_string = json_string.merge!({ "plural" => item.plural})
      result_json_string = json_string.merge!({ "article" => item.article})

      if I18n.locale == :ru
        result_json_string = json_string.merge!({ "translation" => item.ru_translation})
      elsif I18n.locale == :uk
        result_json_string = json_string.merge!({ "translation" => item.uk_translation})
      elsif I18n.locale == :pl
        result_json_string = json_string.merge!({ "translation" => item.pl_translation})
      elsif I18n.locale == :en
        result_json_string = json_string.merge!({ "translation" => item.en_translation})
      end

      result_array << (result_json_string.as_json)
    end

    @verbs = Verb.order("RAND()").limit(3)
    logger.info("Selected #{@verbs.length} verbs from DB")
    @verbs.each do |item|
      json_string = JSON.parse("{}")

      result_json_string = json_string.merge!({ "type" => "verb"})
      result_json_string = json_string.merge!({ "word" => item.word})
      result_json_string = json_string.merge!({ "auxverb" => item.auxverb})
      result_json_string = json_string.merge!({ "partizip" => item.partizip})

      if I18n.locale == :ru
        result_json_string = json_string.merge!({ "translation" => item.ru_translation})
      elsif I18n.locale == :uk
        result_json_string = json_string.merge!({ "translation" => item.uk_translation})
      elsif I18n.locale == :pl
        result_json_string = json_string.merge!({ "translation" => item.pl_translation})
      elsif I18n.locale == :en
        result_json_string = json_string.merge!({ "translation" => item.en_translation})
      end

      result_array << (result_json_string.as_json)
    end

    render :json => result_array.shuffle

  end

end
