class Lesson < ActiveRecord::Base

  has_many :adjectives
  has_many :verbs
  has_many :nouns

	def as_json(options = {})

    adjective = Adjective.take(3)

    super(options.merge(include: :adjectives))
  end
end
