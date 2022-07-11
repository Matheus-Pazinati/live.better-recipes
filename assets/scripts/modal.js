const Modal = { 
  container: document.querySelector('.modal'),
  open(){
    Modal.container.classList.add('active')
  },
  close(){
    Modal.container.classList.remove('active')
  }
}
export function openAndCloseModal() {
  const buttonsShowRecipe = document.querySelectorAll('[data-recipe-button]')
  const buttonCloseRecipe = document.querySelector('.icon-close')
  for (let button of buttonsShowRecipe) {
    button.addEventListener('click', Modal.open)
  }
  buttonCloseRecipe.addEventListener('click', Modal.close)
}
openAndCloseModal()