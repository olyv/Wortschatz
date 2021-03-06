# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160530183844) do

  create_table "adjectives", force: :cascade do |t|
    t.string "word"
    t.string "en_translation"
    t.string "ru_translation"
    t.string "pl_translation"
  end

  create_table "nouns", force: :cascade do |t|
    t.string "word"
    t.string "article"
    t.string "plural"
    t.string "en_translation"
    t.string "ru_translation"
    t.string "pl_translation"
  end

  create_table "verbs", force: :cascade do |t|
    t.string "word"
    t.string "auxverb"
    t.string "partizip"
    t.string "en_translation"
    t.string "pl_translation"
    t.string "ru_translation"
  end

end
