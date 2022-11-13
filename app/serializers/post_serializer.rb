class PostSerializer < ActiveModel::Serializer
  attributes :id, :page, :user_id, :book_title, :quote

  belongs_to :user
end
