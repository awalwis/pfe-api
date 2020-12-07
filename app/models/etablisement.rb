class Etablisement < ApplicationRecord
	validates :nom, presence: true
  	validates :login, presence: true
  	validates :motDePasse, presence: true
end
