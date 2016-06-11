class Verbs < ActiveRecord::Migration
  def change
    create_table :verbs do |t|
      t.string :word
      t.string :translation
      t.string :auxverb
      t.string :partizip
    end
  end
end
