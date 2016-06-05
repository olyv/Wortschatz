class CreateAdjectives < ActiveRecord::Migration
  def change
    create_table :adjectives do |t|
      t.string :word
      t.string :translation
    end
  end
end
