class User < ApplicationRecord
    has_secure_password

    has_many :posts
    has_many :user_friends
    has_many :books, through: :posts

    validates :first_name, :last_name, :picture, :username, :password, presence: true
    validates :username, uniqueness: true
end
