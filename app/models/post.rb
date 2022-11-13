class Post < ApplicationRecord
        belongs_to :user

    validates :page, :user_id, :book_title, :quote, presence: true
    validates :quote, length: {in: 2..240, message: "240 characters maximum"}
    validates :page, numericality: {only_integer: true, message: "The page must be a number!"}
end
