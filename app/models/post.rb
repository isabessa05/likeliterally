class Post < ApplicationRecord
    belongs_to :user
    belongs_to :book

    validates :page, :user_id, :book_id, :quote, presence: true
    validates :quote, lenght: {in 2..240, message: "240 characters maximum"}
    validates :page, numericality: {only_integer: true, message: "The page must be a number!"}
end
