class User < ApplicationRecord
    has_secure_password

    has_many :posts
    has_many :user_books
    has_many :books, through: :user_books

    validates :first_name, :last_name, :picture, :username, :password, presence: true
    validates :username, uniqueness: true


    def totalbooks 
        self.books.count
    end
end
