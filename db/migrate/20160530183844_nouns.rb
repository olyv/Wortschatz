class Nouns < ActiveRecord::Migration
  def change
    create_table :nouns do |t|
      t.string :word
      t.string :translation
      t.string :article
      t.string :plural
    end
  end
end
