import { getRecipes } from "./get-recipes.js";
import { setRecipeOnModal } from "./set-recipe-modal.js";

export async function showRecipe() {
  const recipes = await getRecipes()
  const recipeButtons = document.querySelectorAll('[data-recipe-button]');
  const recipeIngredientsList = document.createElement('ul')
  const recipePreparationList = document.createElement('ol')
  let modalIngredients = document.querySelector('.modal-ingredients')
  let modalPreparation = document.querySelector('.modal-preparation')
  const recipeTitle = document.querySelector('.modal-title')
  recipeButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      recipeIngredientsList.innerHTML = "";
      recipePreparationList.innerHTML = "";
      const recipeID = e.target.getAttribute('data-recipe-button')
      const recipeChoosen = recipes.find(recipe => Number(recipe.id) === Number(recipeID))
      recipeTitle.textContent = recipeChoosen.nome
      setRecipeOnModal(recipeChoosen.ingredientes, modalIngredients, recipeIngredientsList)
      setRecipeOnModal(recipeChoosen.preparo, modalPreparation, recipePreparationList)
    })
  })
}