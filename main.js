class Recipe { //Cria classe Recipe, com nome, descrição, e um método para mostrar na página
  constructor(name, description) {
    this.name = name;
    this.description = description;
  }
  show(title, description) {
    title.textContent = this.name;
    description.textContent = this.description;
  }
}

const Modal = { 
  container: document.querySelector('.modal'),//Selecionando o modal, para aplicar ou remover o active
  title: document.querySelector('.modal-title'), //Local onde ficará o título da receita na modal
  description: document.querySelector('.modal-description'),//Local onde ficará a descrição da receita na modal
  open(){
    Modal.container.classList.add('active') //Método para abrir a modal, adicionando a classe active
  },
  close(){
    Modal.container.classList.remove('active')// Método para remover a modal, removendo a classe active
  }
}

const recipesDescriptions = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facilis perspiciatis, esse possimus eaque totam, sed repudiandae eligendi iusto dolorum a pariatur voluptate sunt explicabo similique, quos qui odit illo?"
let recipeTitles = document.querySelectorAll('.recipe-title') //Seleciona o título das receitas no HTML
let recipes = new Array()//Array vazio, que conterá cada uma das receitas

recipeTitles.forEach((recipe, index) => { //Para cada uma das receitas no HTML...
  recipes[index] = new Recipe(recipeTitles[index].textContent, recipesDescriptions) //Adicione no array
})

const recipeButtons = document.querySelectorAll('[data-recipe-button]')//Seleciona todos os botões Ver receita
recipeButtons.forEach((button, index) => { //Pra cada botão...
  let chosenRecipe = recipes[index]//Neste momento, chosenRecipe pode ser qualquer receita
  button.addEventListener('click', () => { //Quando eu clicar em um dos botões de Ver receita...
    Modal.open()//Abra o modal
    chosenRecipe.show(Modal.title, Modal.description)//Neste momento, chosenRecipe vai ser a receita que foi clicada, e então executa o método da classe Recipe
  })
})