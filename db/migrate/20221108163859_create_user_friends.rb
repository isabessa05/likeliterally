class CreateUserFriends < ActiveRecord::Migration[6.1]
  def change
    create_table :user_friends do |t|
      t.integer :user_id
      t.integer :friend_id
      t.string :confirmed, default: false

      t.timestamps
    end
  end
end
