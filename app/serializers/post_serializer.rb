class PostSerializer < ActiveModel::Serializer
  attributes :id, :page, :user_id, :book_id, :quote
end
