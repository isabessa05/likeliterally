class Book < ApplicationRecord
    has_many :posts
    has_many :users, through: :posts

    validates :title, :author, :description, :genre, presence: true
    validates :title, uniqueness: true, message: "You can only add a book once!"
end
