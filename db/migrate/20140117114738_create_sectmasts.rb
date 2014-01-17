class CreateSectmasts < ActiveRecord::Migration
  def change
    create_table :sectmasts do |t|
      t.column :sectcd, "varchar(2)"
      t.column :sectname, "varchar(255)"
      t.timestamps
    end
  end
end
