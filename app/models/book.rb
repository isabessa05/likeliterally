class Book < ApplicationRecord
    has_many :posts
    has_many :users, through: :posts

    validates :title, :author,  presence: true
    validates :title, uniqueness: true


    def findPosts 
        posts = Post.where(book_title: self.title)
        return posts
    end

    
end
