class Api::V1::EtablisementsController < ApplicationController
  def index
  end

  def create
  	#recipe = Recipe.create!(recipe_params)
    #if recipe
    #  render json: recipe
    #else
     # render json: recipe.errors
    #end

    etablissement = Etablisement.create!(etablissement_params)
    if etablissement
      render json: etablissement
    else
      render json: etablissement.errors
    end
  end

  def show
  end

  def destroy
  end



  private

  def recipe_params
    params.permit(:name, :image, :ingredients, :instruction)
  end	

  def etablissement_params
    params.permit(:nom, :login, :motDePasse)
  end

end
