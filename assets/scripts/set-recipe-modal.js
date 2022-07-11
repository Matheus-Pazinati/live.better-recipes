export function setRecipeOnModal(recipes, modalContent, list) {
  for (let item of recipes) {
    let recipeItem = document.createElement('li')
    recipeItem.textContent = item
    recipeItem.classList.add('modal-item')
    list.appendChild(recipeItem)
  }
  modalContent.appendChild(list)
}