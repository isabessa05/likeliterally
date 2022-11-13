class Book < ApplicationRecord
    has_many :posts
    has_many :users, through: :posts

    validates :title, :author, :description,  presence: true
    validates :title, uniqueness: true

    
end
