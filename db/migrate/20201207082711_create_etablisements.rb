class CreateEtablisements < ActiveRecord::Migration[5.2]
  def change
    create_table :etablisements do |t|
      t.string :nom
      t.string :login
      t.string :motDePasse

      t.string :nom, null: false
      t.text :login, null: false
      t.text :motDePasse, null: false

      t.timestamps
    end
  end
end
