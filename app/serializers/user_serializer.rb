class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :username, :picture, :password, :totalbooks

 has_many :books, through: :user_books

end
