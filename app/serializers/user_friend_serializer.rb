class UserFriendSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :friend_id, :confirmed
end
