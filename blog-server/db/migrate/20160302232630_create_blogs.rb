class CreateBlogs < ActiveRecord::Migration[5.0]
  def change
    create_table :blogs do |t|
      t.string :uuid
      t.string :title
      t.string :content
      t.integer :votes

      t.timestamps
    end
  end
end
